
export default async function get_data(userdata){
    const user_data = userdata;
    const url = 'https://api.together.xyz/v1/chat/completions';
    const apiKey = 'c97d5a507595ab5e57cc0a30142de2a45744c04e59b5c90958ae403ce545a2de';

    const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    });

    const data = {
        model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
        max_tokens: 4000,
        messages: [
        {
            role: 'user',
            content: user_data,
        },
        ]
    };

    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    };

    fetch(url, options)
        .then(response => response.json())
        .then(result => {
            // console.log(result);
        })
        .catch(error => {
            console.error('Error:', error);
        });

    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    return result.choices[0].message.content;
}

