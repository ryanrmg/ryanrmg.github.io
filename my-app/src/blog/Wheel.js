import { useState } from 'react';

export default function Wheel() {

    function ComputeReturn(ticker, price, annual, weekly, years) {
        let total = 0;
        let buyAndHoldShares = 100;
        let buyAndHoldTotal = 0;
        let shares = 100;
        let yearReturn = 0;
        let contracts = 0;
        let originalPrice = price;
        for (let i = 0; i < years; i++) {
            contracts = Math.round(shares / 100);
            yearReturn = 52 * weekly * contracts; // compute covered call return for 52 weeks for n contracts
            total += yearReturn; // add this year return to our total return 
            // total += annual * price * shares; // add the dividend to our total

            price = price * (1 + annual); // update price
            shares += (yearReturn / price); // purchase shares using yearly return   
        }
        return (
            <>
                <p>
                    Your starting investment is <span id="green">${(originalPrice * 100).toLocaleString("en-US")}. </span>
                    And after {years} years, your investment might be approximately <span id="green">${Math.round(shares * price).toLocaleString("en-US")} </span> 
                    and you may own about <span id="green">{Math.round(shares).toLocaleString("en-US")} </span> shares of {ticker}.
                </p>
                <p>
                    If you simply bought and held the shares your ending investment would be <span id="coral">${Math.round(price * buyAndHoldShares).toLocaleString("en-US")} </span>
                    worth of {ticker}. 
                </p>
            </>
        );
    }

    function ReturnCalculator() {
        const [ticker, setTicker] = useState('PLTR');
        const [price, setPrice] = useState('15');
        const [annual, setAnnual] = useState('.06');
        const [weekly, setWeekly] = useState('15');
        const [years, setYears] = useState('20');
        const priceAsNumber = Number(price);
        const annualAsNumber = Number(annual);
        const weeklyAsNumber = Number(weekly);
        const yearsAsNumber = Number(years);
        return (
            <form id="flex-column">
                <label>
                    Ticker: <input 
                                name="ticker" 
                                value={ticker} 
                                onChange={e => setTicker(e.target.value)}
                            />
                </label>
                <label>
                    Current Price: <input 
                                name="price" 
                                value={price} 
                                onChange={e => setPrice(e.target.value)}
                            />
                </label>
                <label>
                    Annual Return: <input 
                                name="annual"
                                value={annual} 
                                onChange={e => setAnnual(e.target.value)}
                            />
                </label>
                <label>
                    Weekly Return:<input 
                                name="weekly" 
                                value={weekly} 
                                onChange={e => setWeekly(e.target.value)}
                            />
                </label>
                <label>
                    Years Invested: <input 
                                name="years" 
                                value={years} 
                                onChange={e => setYears(e.target.value)}
                            />
                </label>
                {ComputeReturn(ticker, priceAsNumber, annualAsNumber, weeklyAsNumber, yearsAsNumber)}
                
            </form>

        );
    }

    return (
        <div className="Blog">
            <div className="Blog-header">
                free shares of stock?
            </div>
            <div className="Blog-body">
                <p>
                    I <span id="green">print money. </span> Almost.
                    It's not complete arbitrage, it requires some capital and some 
                    risk. And this strategy does not work under every market condition. 
                    However, it can be a great strategy to "rent" your equity, yielding higher returns than 
                    buying and holding shares. Please pay attention to the risks.
                </p>
                <p>
                    For the following examples, I plan to use the ticker <span id="coral">QQQ </span>
                    because it's one of the most common ETFs and it works 
                    pretty well for this strategy. At the time of writing this, it costs around <span id="green">$370 </span> / share.
                </p>
                <h2>Call and Put Options</h2>
                <p>
                    A Call option gives the buyer the right to purchase a stock 
                    at a specified date for a specified price. The buyer pays what is called a 
                    premium which goes to the seller. The seller collects this premium 
                    and if the stock is trading above the specified price, must 
                    sell their shares to the buyer at the predetermined price. Each contract 
                    gives the buyer the right to purchase 100 shares of a stock.
                </p>
                <p>
                    A Put option gives the buyer the right to sell a stock at a 
                    specified date for a specified price. Again, the buyer pays a 
                    premium which goes to the seller. The seller collects this premium 
                    and if the stock is trading below this price, the seller must 
                    purchase the shares from the buyer at this specified price. Each 
                    contract gives the buyer the right to sell 100 shares of a stock.
                </p>
                <h2>Theta Decay</h2>
                <p>
                    Time premium works in the sellers favor. This is the side 
                    we will take in this strategy. As time goes on, and as each 
                    day passes, the premium of our contract decreases even if the 
                    price of the underlying security remains the same. Consider we 
                    sell a Put option with strike 360 for 2.22 when the underlying is at 
                    365. If theta = .4, the next day, if the underlying is still trading 
                    at 365 (unlikely but bear with me), our put option will be worth 
                    1.82. We just made <span id="green">$40. </span> We sold at $2.22 and we could choose 
                    to buy it back at $1.82 for <span id="green">$40 </span> profit. 
                </p>
                <h2>Delta</h2>
                <p>
                    Delta indicates how much the price of the premium moves for a 
                    $1 move of the underlying. It also can be an indicator of the 
                    likelihood the option will be in or out of the money. For example,
                    at delta of .3 indicates there is approximately a 30% the option 
                    is in the money. If we are selling a put, this means there is about a 30% 
                    we must purchase 100 shares at the price specified. 
                </p>
                <h2>The Wheel</h2>
                <p>
                    This strategy involves selling Puts to get into the position, 
                    and selling Calls once we are in the position. Typically, 
                    we pick a stock we wouldn't mind owning long term. 
                    We limit our upside potential slightly while adding downside protection. 
                    Find a balance that works for you. 
                </p>
                <p>
                    Consider <span id="coral">QQQ </span> is trading at $370 per share. Today is July 2. 
                    The weekly July 7 $360 Puts are trading at $0.45 / contract. If we 
                    sold these this week, and did the same for the next 10 weeks. 
                    We'd have a little more than enough to buy a share of <span id="coral">QQQ</span>. The $365 
                    Puts are trading around $1.23 / contract. In only 3 weeks we'd 
                    have enough to buy a share of <span id="coral">QQQ</span>.
                </p>
                <p>
                    Let's say <span id="coral">QQQ </span> dipped below our strike, unless we roll the option; 
                    buy it back and sell another week out, we purchase 100 shares of <span id="coral">QQQ</span>.
                    Now we start selling Calls. The weekly $375 calls for this week 
                    are trading around $1.00 per contract. We could also sell 
                    longer expirations (30 or 60 days). 
                </p>
                <p>
                    Currently trying this on Panantir Technologies (PLTR) as I 
                    like this company long term and it only requires $1500. 
                    See the table below. I use the profits to purchase more shares of 
                    PLTR and when the option expires in the money, I purchase or sell 
                    the shares.
                </p>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Strike</th>
                        <th>Type</th>
                        <th>Profit</th>
                    </tr>
                    <tr>
                        <td>Jun 16 2023</td>
                        <td>14.5</td>
                        <td>Put</td>
                        <td>$13.68</td>
                    </tr>
                    <tr>
                        <td>Jun 23 2023</td>
                        <td>14.5</td>
                        <td>Put</td>
                        <td>$11.68</td>
                    </tr>
                    <tr>
                        <td>Jun 23 2023</td>
                        <td>15.5</td>
                        <td>Put</td>
                        <td>$27.68</td>
                    </tr>
                    <tr>
                        <td>Jun 30 2023</td>
                        <td>15.5</td>
                        <td>Call</td>
                        <td>$6.68</td>
                    </tr>
                    <tr>
                        <td>Jul 07 2023</td>
                        <td>14.5</td>
                        <td>Put</td>
                        <td>$9.33</td>
                    </tr>
                    <tr>
                        <td>Jul 07 2023</td>
                        <td>16</td>
                        <td>Call</td>
                        <td>$10.68</td>
                    </tr>
                    <tr>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                        <td> - </td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td><span id="green">$79.73</span></td>
                    </tr>
                </table>
                <p>
                    This is not investment advice. Please do your own research
                    before investing your own capital. Past performance does not 
                    indicate future performance.
                </p>
                <h2>Return Calculator</h2>
                <p>
                    The calculator below will compute approximate returns based 
                    on years invested, annual return on investment of underlying 
                    and the average profit you expect to make per week. All 
                    gains are re-invested or used to purchase more shares of 
                    the equity you choose. This is based solely on covered 
                    calls and assumes you already own 100 shares of the underlying, 
                    the option always expires worthless, you are selling weeklys and 
                    assumes you will consistently make whatever value you input 
                    for weekly return every week. (Some weeks you will make more 
                    some weeks you will make less so good to use a conservative 
                    estimate).
                </p>
                <ReturnCalculator />
            </div>
        </div>
    );
}