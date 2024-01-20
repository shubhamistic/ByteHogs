import requests
import json

with open("../configs/gpt_config.json", "r") as gpt_config:
    gpt_config_data = json.load(gpt_config)

    # get api_url and api_key
    api_url = gpt_config_data["api_url"]
    api_key = gpt_config_data["api_key"]

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }


def ask_gpt(question):
    global api_url, headers

    data = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": question}
        ]
    }

    # Make the API request
    response = requests.post(api_url, headers=headers, data=json.dumps(data))

    # Parse and print the response
    if response.status_code == 200:
        result = response.json()
        return {
            "success": True,
            "reply": result['choices'][0]['message']['content']
        }
    else:
        return {
            "success": False,
            "Error_Message": response.text,
            "Status_Code": response.status_code
        }
