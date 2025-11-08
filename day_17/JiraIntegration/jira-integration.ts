import axios from "axios"

const endpoint="https://manual-testing-demoproject.atlassian.net/rest/api/2/issue"
const username="ravindranr90@gmail.com"
const apiKey="ATATT3xFfGF0AukygcQAxYQKufVhTi4F6kL14T70fZr1j9c7764ju6Vww3ZtXffuF-Nrq7ZTjWhFU8lPNsYJyYrSK9iR_9KJ-1PGZq8_lyEz22mpWN88Puz_uvZmXc6wEsD0Dur4rNzahHmZFfb8OjuO-CKF9lRsSIIhhAVsPIFp2m80y7mwp0w=BDAFFA27"
const projectId="SEP"


export async function createJiraIssue(summary: string, description: string) {

    const issueRequestJson = {
        "fields": {
            "project": {
                "key":projectId
            },
            "summary":summary,
            "description":description,
            "issuetype":{
                "name":"Bug"
            }
        }
    }


//Send the POST request :

await axios.post(endpoint,issueRequestJson,
    {
    auth:{
        username:username,
        password : apiKey
    },
    headers:{
        'Content-Type':'application/json'
    }
}

)
}