import { instance as api } from "../index";

const BASE_ID = "appXM676mFCoRKKBF";

async function airTable(tableName) {
  try {
    const apiUrl = `https://api.airtable.com/v0/${BASE_ID}/${tableName}`;
    const response = await api.get(apiUrl);
    return response.data.records;
  } catch (error) {
    console.error(`Error fetching data from Airtable (${tableName}):`, error);
    return error;
  }
}

export { airTable };
