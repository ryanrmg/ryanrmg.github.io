import { Chart } from "react-google-charts";
import { useState, useEffect } from 'react';
import Papa from 'papaparse';

export default function Rosemoor() {
    let MOST_RECENT = "./data/Ranking_September_24.csv";

    const [text, setText] = useState('');
    const [data, setData] = useState([[]]);

    function loadResources() {
        fetch( MOST_RECENT )
            .then( response => response.text() )
            .then( responseText => {
                setText( responseText );
            });
    }


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(MOST_RECENT);
            const text = await response.text();
    
            // Parse the CSV data
            Papa.parse(text, {
              complete: (result) => {
                const csvData = result.data.slice(1,);
    
                // Filter to get only the first two columns
                const filteredData = csvData.map((row) => [row[0], row[1]]);
    
                setData(filteredData);
              },
              header: false, // Set to true if your CSV has a header row
            });
          } catch (error) {
            console.error('Error fetching the CSV file:', error);
          }
        };
    
        fetchData();
      }, []);
    

    const chartData = [
        ['rank', 'ticker'],
        ...data
    ];

    return (
        <>
        <p>Based on the formula in The Little Book that Beats the Market by Joel Greenblatt</p>
        <Chart
            chartType="Table"
            data={chartData}
            onLoad={loadResources}
        />

        </>
    )
}