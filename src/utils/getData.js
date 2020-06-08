const API = 'http://localhost:3000/api/v1/clothes';

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;
    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(`Fetch Error ${error}`);
    };
};

export default getData;