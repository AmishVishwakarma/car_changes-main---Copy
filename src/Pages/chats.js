import React, { useState } from 'react';
import get_data from './together.js';




const examples = [
  'Welcome to the legal document generation app. Please enter text.',

]
const Chat = () => {
  const [chat, setChat] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [title, setTitle] = useState('');
  const [input, setInput] = useState('');
  const [fileInput, setFileInput] = useState(null);
  



  const handleSend = async () => {
    if (input.trim) {
      setChat([...chat, { role: 'user', content: input }]);
      setInput('');

      if (fileInput && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        // Add your logic for processing the file as needed
        console.log('File uploaded:', file.name);
        setFileInput(null);
      }


      // const response = await fetch('http://192.168.0.124:5005/upshot', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'raw',
      //   },
      //   body: {
      //     messages: [
      //       ...chat,
      //       { role: 'user', content: input },
      //     ]
      //   }
      // });

      // postman code snippet 
      // var myHeaders = new Headers();

      // myHeaders.append("Content-Type", "text/plain");
      // //myHeaders.append('origin', "http://192.168.0.124:5005/upshot")
      // myHeaders.append('Access-Control-Allow-Credentials', 'true')


      // //var raw = "To draft a government contracts agreement, include: parties' names, contract scope, deliverables, payment terms, performance milestones, termination provisions, dispute resolution mechanisms, and compliance with applicable laws and regulations. Tailor the agreement to meet specific government requirements and consult legal counsel for accuracy and compliance.";

      // var requestOptions = {
      //   method: 'POST',
      //   headers: myHeaders,
      //   body: input,
      //   redirect: 'follow',
      // };

      // fetch("http://192.168.0.124:5005/upshot", requestOptions)
      //   .then(response => response.text())
      //   //.then(result => console.log(result))
      //   .catch(error => console.log('error', error));
      // //postman code ends here
      console.log(input)
      // get_data(input).then(
      //   (response_data) => {
      //     // console.log(response_data.choices[0].message.content)
      //     const readData = response_data.choices[0].message.content  

      //   } 
      // )
      const readData = await get_data(input)

      //eslint-disable-next-line
      // const readData = response_data.choices[0].message.content  //.body.pipeThrough(new TextDecoderStream()).getReader();
      // console.log(readData)
      // let aiRes = '';
      // while (true) {
      //   const { done, value } = await readData.read();
      //   if (done) {
      //     break;
      //   }
      //   aiRes += value;
      //   setChat([...chat, { role: 'user', content: input }, { role: 'assistant', content: aiRes }]);
      // }
      setChat([...chat, { role: 'user', content: input }, { role: 'assistant', content: readData }]);

      if (!title) {
        const createTitle = await fetch('http://192.168.0.124:5005/upshot', {
          method: 'POST',
          headers: {
            'Content-Type': 'raw',
          },
          body: {
            title: input,
          },
        });

        const title = await createTitle.json();
        setTitle(title?.title);
        setChatHistory([...chatHistory, title]);
      }
    }
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && (input.trim() || (fileInput && fileInput.files.length > 0))) {
      handleSend();
    }
  };
  

  return (
    <div className=' h-screen w-screen flex bg-[#50509]'>
      <div className=' w-[20%] h-screen bg-[#0c0c15] text-white p-4'>
        <div className=' h-[5%]'>
          <button className=' w-full h-[50px] border rounded hover:bg-slate-600' onClick={() => {
            setChat([]);
            setTitle('');
          }}>+ New Chat</button>
        </div>
        <div className=' h-[70%] overflow-scroll shadow-lg hide-scroll-bar mb-4'>
          {
            chatHistory.map((item, index) => (
              <div className=' py-3 text-center rounded mt-4 text-lg font-light flex items-center px-8 hover:bg-slate-600 cursor-pointer'>
                <span className=' mr-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 9h8"></path>
                    <path d="M8 13h6"></path>
                    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                  </svg>
                </span>
                <span className=' text-left'>{item.title}</span>
              </div>
            ))
          }
        </div>
        {/* <div className='overflow-scroll shadow-lg hide-scroll-bar h-[20%] border-t'>
          {
            [1].map((item, index) => (
              <div className=' py-3 text-center rounded mt-4 text-lg font-light flex items-center px-8 hover:bg-slate-600 cursor-pointer'>
                <span className=' mr-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11.482 20.924a1.666 1.666 0 0 1 -1.157 -1.241a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.312 .318 1.644 1.794 .995 2.697"></path>
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    
                    <path d="M17 17l-2 2l2 2"></path>
                  </svg>
                </span>
                Youtube 
              </div>
            ))
          }
        </div> */}
      </div>
      <div className=' w-[80%]'>
        {
          chat.length > 0 ?
            (
              <div className=' h-[80%] overflow-scroll hide-scroll-bar pt-8'>
                {
                  chat.map((item, index) => (
                    <div className={` w-[60%] mx-auto p-6 text-white flex ${item.role === 'assistant' && 'bg-slate-900 rounded'}`}>
                      <span className=' mr-8 p-2 bg-slate-500 text-white rounded-full h-full '>
                        {
                          item.role === 'user' ?
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-bolt" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                              <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.267 0 .529 .026 .781 .076"></path>
                              <path d="M19 16l-2 3h4l-2 3"></path>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-robot" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"></path>
                              <path d="M10 16h4"></path>
                              <circle cx="8.5" cy="11.5" r=".5" fill="currentColor"></circle>
                              <circle cx="15.5" cy="11.5" r=".5" fill="currentColor"></circle>
                              <path d="M9 7l-1 -4"></path>
                              <path d="M15 7l1 -4"></path>
                            </svg>
                        }
                      </span>
                      <div className=' leading-loose' style={{ whiteSpace: 'break-spaces' }}>{item.content}</div>
                    </div>
                  ))
                }
              </div>
            )
            :
            (
              <div className=' h-[80%] flex flex-col justify-center items-center text-white'>
                <div className=' text-4xl font-bold mb-8'>APP GPT</div>
                <div className=' flex flex-wrap justify-around max-w-[900px]'>
                  {
                    examples.map((item, index) => (
                      <div className=' text-lg font-light mt-4 p-4 border rounded cursor-pointer min-w-[400px] hover:bg-slate-800' onClick={() => setInput(item)}>{item}</div>
                    ))
                  }
                </div>
              </div>
            )
        }

        <div className='h-[20%]'>
          <div className='flex flex-col items-center justify-center w-full h-full text-white'>
            <div className='w-[60%] flex justify-center relative'>
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 0 24 24" stroke-width="2" stroke="currentColor" className="w-8 h-15">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg> */}

              <input type='text' onChange={(e) => setInput(e.target.value)}onKeyPress={handleKeyPress} value={input} className='w-full rounded-lg p-4 pr-16 bg-slate-800 text-white' placeholder='Type your message here...' />

              <label htmlFor="file-upload" className='ml-2 mt-1.5 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 0 24 24" stroke-width="2" stroke="currentColor" className="w-8 h-15">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 21l9-9 9 9" />
                </svg>
                <input
                  type='file'
                  id='file-upload'
                  accept='.pdf, .doc, .docx'
                  onChange={(e) => setFileInput(e.target)}
                  className='hidden'
                />
              </label>

              <span className='ml-2 mt-4 cursor-pointer' onClick={() => (input.trim() || (fileInput && fileInput.files.length > 0)) ? handleSend() : undefined}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 14l11 -11"></path>
                  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
              </span>
            </div>
            <small className='text-slate-500 mt-2'>Legal document generation</small>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Chat;