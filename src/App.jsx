import { Table } from "@devseed-ui/typography";
import { useCallback, useState } from "react";
import favicon from "./graphics/meta/favicon.png";
import { time } from "./time.json";
// import { DatePicker } from '@devseed-ui/date-picker';

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [loaded, setLoaded] = useState(false);

  const loadData = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}/package.json`);
      const result = await response.json();
      setLoaded(result);
    } catch (error) {
      setLoaded("Error");
    }
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <p>
        Time from file: <strong>{new Date(time).toISOString()}</strong>
      </p>

      <p>
        {!loaded && "Data not loaded."}
        {!loaded && (
          <button type="button" onClick={loadData}>
            Load data
          </button>
        )}
        {loaded && `Current project-seed version: ${loaded.version}`}
      </p>

      <h3>Image loaded via data-url</h3>
      <img src={favicon} width={96} />

      <h3>Image loaded directly</h3>
      <img src={`${apiUrl}/static/default-meta-image.png`} width={200} />

      <Table>
        <thead>
          <tr>
            <th colspan="2">The table header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
