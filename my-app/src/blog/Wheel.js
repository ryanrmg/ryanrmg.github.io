export default function Wheel() {
    return (
        <div className="Blog">
            <div className="Blog-header">
                free shares of stock?
            </div>
            <div className="Blog-body">
                <p>
                    I am going to explain a strategy I use to print money. Almost.
                    It's not completely free, it requires some capital and some 
                    risk. And this strategy does not work under every market condition. 
                    However, it can be a great strategy to "rent" your equity. Please 
                    pay attention to the risks.
                </p>
                <p>
                    For the following examples, I plan to use the ticker QQQ
                    because it's one of the most common ETFs and it works 
                    pretty well for this strategy. However, it does require quite a 
                    bit of capital as at the time of writing it costs around 370 / share.
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
                    1.82. We just made $40. We sold at $2.22 and we could choose 
                    to buy it back at $1.82 for $40 profit. 
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
                    Consider QQQ is trading at $370 per share. Today is July 2. 
                    The weekly July 7 $360 Puts are trading at $0.45 / contract. If we 
                    sold these this week, and did the same for the next 10 weeks. 
                    We'd have a little more than enough to buy a share of QQQ. The $365 
                    Puts are trading around $1.23 / contract. In only 3 weeks we'd 
                    have enough to buy a share of QQQ. 
                </p>
                <p>
                    Let's say QQQ dipped below our strike, unless we roll the option; 
                    buy it back and sell another week out, we purchase 100 shares of QQQ.
                    Now we start selling Calls. The weekly $375 calls for this week 
                    are trading around $1.00 per contract. 
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
                        <td>$79.73</td>
                    </tr>
                </table>
                <p>
                    This is not investment advice. Please do your own research
                    before investing your own capital. Past performance does not 
                    indicate future performance.
                </p>
            </div>
        </div>
    );
}