import React from 'react'

function Box2() {
  return (
    <div className=' bg-zinc-800  bg-opacity-30 backdrop-blur-lg rounded-md border-[1px] border-zinc-500 col-span-9 animate-slideIn2 overflow-x-auto overflow-y-hidden'>
      <div className="h-full border-l-[1px] border-zinc-400 ml-10 flex items-end w-auto justify-center pt-4">
        <div className="h-auto w-full relative bottom-12 grid grid-cols-6 items-end justify-items-center  px-5 pt-4">
          <div className="md:h-[8rem] h-[4rem] md:w-10 w-8 bg-orange-500 rounded-t-md border-x-[1px] border-t-[1px] border-orange-700 animate-grow delay-400"></div>
          <div className="md:h-[9rem] h-[5rem] md:w-10 w-8 bg-orange-500 rounded-t-md border-x-[1px] border-t-[1px] border-orange-700 animate-grow delay-600"></div>
          <div className="md:h-[10rem] h-[6rem] md:w-10 w-8 bg-orange-500 rounded-t-md border-x-[1px] border-t-[1px] border-orange-700  animate-grow delay-800"></div>
          <div className="md:h-[10rem] h-[6rem] md:w-10 w-8 bg-orange-500 rounded-t-md border-x-[1px] border-t-[1px] border-orange-700  animate-grow delay-800"></div>
          <div className="md:h-[10rem] h-[6rem] md:w-10 w-8 bg-orange-500 rounded-t-md border-x-[1px] border-t-[1px] border-orange-700  animate-grow delay-800"></div>
          <div className="md:h-[10rem] h-[6rem] md:w-10 w-8 bg-orange-500 rounded-t-md border-x-[1px] border-t-[1px] border-orange-700  animate-grow delay-800"></div>
        </div>
      </div>

      <div className='h-[50px] border-t-[1px] border-zinc-400 relative bottom-12 flex items-center '>
        <div className='grid grid-cols-6 items-center justify-items-center w-full  h-auto  px-5 pl-[60px]'>
          <svg className='h-[25px] w-[25px] md:h-[30px] md:w-[30px] relative top-[2.5px]' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M0 0h256v256H0V0z" fill="#F7DF1E"></path><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"></path></g></svg>
          <svg className='h-[30px] w-[30px] md:h-[40px] md:w-[40px]' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
          <svg className='h-[30px] w-[30px] md:h-[40px] md:w-[40px]' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z" fill="#44a8b3" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.2" className='h-[40px] w-[40px] md:h-[50px] md:w-[50px]' viewBox="0 0 442.37 270.929"><defs><clipPath id="a"><path d="M239.03 226.605l-42.13 24.317c-1.578.91-2.546 2.59-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336c1.575.907 3.517.907 5.09 0l42.126-24.336c1.57-.91 2.54-2.59 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317c-.79-.453-1.67-.68-2.55-.68-.88 0-1.76.227-2.55.68" /></clipPath><linearGradient id="b" x1="-.348" x2="1.251" gradientTransform="rotate(116.114 53.1 202.97) scale(86.48)" gradientUnits="userSpaceOnUse"><stop offset=".3" stop-color="#3E863D" /><stop offset=".5" stop-color="#55934F" /><stop offset=".8" stop-color="#5AAD45" /></linearGradient><clipPath id="c"><path d="M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39c-.414-.24-.863-.41-1.32-.53zm0 0" /></clipPath><linearGradient id="d" x1="-.456" x2=".582" gradientTransform="rotate(-36.46 550.846 -214.337) scale(132.798)" gradientUnits="userSpaceOnUse"><stop offset=".57" stop-color="#3E863D" /><stop offset=".72" stop-color="#619857" /><stop offset="1" stop-color="#76AC64" /></linearGradient><clipPath id="e"><path d="M241.066 225.953c-.707.07-1.398.29-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336c1.3-.754 2.19-2.03 2.46-3.476l-46.18-78.89c-.34-.067-.68-.102-1.03-.102-.14 0-.28.007-.42.02" /></clipPath><linearGradient id="f" x1=".043" x2=".984" gradientTransform="translate(192.862 279.652) scale(97.417)" gradientUnits="userSpaceOnUse"><stop offset=".16" stop-color="#6BBF47" /><stop offset=".38" stop-color="#79B461" /><stop offset=".47" stop-color="#75AC64" /><stop offset=".7" stop-color="#659E5A" /><stop offset=".9" stop-color="#3E863D" /></linearGradient></defs><path fill="#689f63" d="M218.647 270.93c-1.46 0-2.91-.383-4.19-1.12l-13.337-7.896c-1.992-1.114-1.02-1.508-.363-1.735 2.656-.93 3.195-1.14 6.03-2.75.298-.17.688-.11.993.07l10.246 6.08c.37.2.895.2 1.238 0l39.95-23.06c.37-.21.61-.64.61-1.08v-46.1c0-.46-.24-.87-.618-1.1l-39.934-23.04c-.37-.22-.86-.22-1.23 0l-39.926 23.04c-.387.22-.633.65-.633 1.09v46.1c0 .44.24.86.62 1.07l10.94 6.32c5.94 2.97 9.57-.53 9.57-4.05v-45.5c0-.65.51-1.15 1.16-1.15h5.06c.63 0 1.15.5 1.15 1.15v45.52c0 7.92-4.32 12.47-11.83 12.47-2.31 0-4.13 0-9.21-2.5l-10.48-6.04c-2.59-1.5-4.19-4.3-4.19-7.29v-46.1c0-3 1.6-5.8 4.19-7.28l39.99-23.07c2.53-1.43 5.89-1.43 8.4 0l39.94 23.08c2.58 1.49 4.19 4.28 4.19 7.28v46.1c0 2.99-1.61 5.78-4.19 7.28l-39.94 23.07c-1.28.74-2.73 1.12-4.21 1.12" /><path fill="#689f63" d="M230.987 239.164c-17.48 0-21.145-8.024-21.145-14.754 0-.64.516-1.15 1.157-1.15h5.16c.57 0 1.05.415 1.14.978.78 5.258 3.1 7.91 13.67 7.91 8.42 0 12-1.902 12-6.367 0-2.57-1.02-4.48-14.1-5.76-10.94-1.08-17.7-3.49-17.7-12.24 0-8.06 6.8-12.86 18.19-12.86 12.79 0 19.13 4.44 19.93 13.98.03.33-.09.65-.31.89-.22.23-.53.37-.85.37h-5.19c-.54 0-1.01-.38-1.12-.9-1.25-5.53-4.27-7.3-12.48-7.3-9.19 0-10.26 3.2-10.26 5.6 0 2.91 1.26 3.76 13.66 5.4 12.28 1.63 18.11 3.93 18.11 12.56 0 8.7-7.26 13.69-19.92 13.69m48.66-48.89h1.34c1.1 0 1.31-.77 1.31-1.22 0-1.18-.81-1.18-1.26-1.18h-1.38zm-1.63-3.78h2.97c1.02 0 3.02 0 3.02 2.28 0 1.59-1.02 1.92-1.63 2.12 1.19.08 1.27.86 1.43 1.96.08.69.21 1.88.45 2.28h-1.83c-.05-.4-.33-2.6-.33-2.72-.12-.49-.29-.73-.9-.73h-1.51v3.46h-1.67zm-3.57 4.3c0 3.58 2.89 6.48 6.44 6.48 3.58 0 6.47-2.96 6.47-6.48 0-3.59-2.93-6.44-6.48-6.44-3.5 0-6.44 2.81-6.44 6.43m14.16.03c0 4.24-3.47 7.7-7.7 7.7-4.2 0-7.7-3.42-7.7-7.7 0-4.36 3.58-7.7 7.7-7.7 4.15 0 7.69 3.35 7.69 7.7" /><path fill="#333" fill-rule="evenodd" d="M94.936 90.55c0-1.84-.97-3.53-2.558-4.445l-42.356-24.37c-.715-.42-1.516-.64-2.328-.67h-.438c-.812.03-1.613.25-2.34.67L2.562 86.105C.984 87.025 0 88.715 0 90.555l.093 65.64c0 .91.47 1.76 1.27 2.21.78.48 1.76.48 2.54 0l25.18-14.42c1.59-.946 2.56-2.618 2.56-4.44V108.88c0-1.83.97-3.52 2.555-4.43l10.72-6.174c.796-.46 1.67-.688 2.56-.688.876 0 1.77.226 2.544.687l10.715 6.172c1.586.91 2.56 2.6 2.56 4.43v30.663c0 1.82.983 3.5 2.565 4.44l25.164 14.41c.79.47 1.773.47 2.56 0 .776-.45 1.268-1.3 1.268-2.21zm199.868 34.176c0 .457-.243.88-.64 1.106l-14.548 8.386c-.395.227-.883.227-1.277 0l-14.55-8.386c-.4-.227-.64-.65-.64-1.106V107.93c0-.458.24-.88.63-1.11l14.54-8.4c.4-.23.89-.23 1.29 0l14.55 8.4c.4.23.64.652.64 1.11zM298.734.324c-.794-.442-1.76-.43-2.544.027-.78.46-1.262 1.3-1.262 2.21v65c0 .64-.34 1.23-.894 1.55-.55.32-1.235.32-1.79 0L281.634 63c-1.58-.914-3.526-.914-5.112 0l-42.37 24.453c-1.583.91-2.56 2.6-2.56 4.42v48.92c0 1.83.977 3.51 2.56 4.43l42.37 24.47c1.582.91 3.53.91 5.117 0l42.37-24.48c1.58-.92 2.56-2.6 2.56-4.43V18.863c0-1.856-1.01-3.563-2.63-4.47zm141.093 107.164c1.574-.914 2.543-2.602 2.543-4.422V91.21c0-1.824-.97-3.507-2.547-4.425l-42.1-24.44c-1.59-.92-3.54-.92-5.13 0l-42.36 24.45c-1.59.92-2.56 2.6-2.56 4.43v48.9c0 1.84.99 3.54 2.58 4.45l42.09 23.99c1.55.89 3.45.9 5.02.03l25.46-14.15c.8-.45 1.31-1.3 1.31-2.22 0-.92-.49-1.78-1.29-2.23l-42.62-24.46c-.8-.45-1.29-1.3-1.29-2.21v-15.34c0-.916.48-1.76 1.28-2.216l13.26-7.65c.79-.46 1.76-.46 2.55 0l13.27 7.65c.79.45 1.28 1.3 1.28 2.21v12.06c0 .91.49 1.76 1.28 2.22.79.45 1.77.45 2.56-.01zm0 0" /><path fill="#689f63" fill-rule="evenodd" d="M394.538 105.2c.3-.177.676-.177.98 0l8.13 4.69c.304.176.49.5.49.85v9.39c0 .35-.186.674-.49.85l-8.13 4.69c-.304.177-.68.177-.98 0l-8.125-4.69c-.31-.176-.5-.5-.5-.85v-9.39c0-.35.18-.674.49-.85zm0 0" /><g clip-path="url(#a)" transform="translate(-78.306 -164.016)"><path fill="url(#b)" d="M331.363 246.793l-118.715-58.19-60.87 124.174L270.49 370.97zm0 0" /></g><g clip-path="url(#c)" transform="translate(-78.306 -164.016)"><path fill="url(#d)" d="M144.07 264.004l83.825 113.453 110.86-81.906-83.83-113.45zm0 0" /></g><g clip-path="url(#e)" transform="translate(-78.306 -164.016)"><path fill="url(#f)" d="M197.02 225.934v107.43h91.683v-107.43zm0 0" /></g></svg>
          <svg className='h-[30px] w-[30px] md:h-[40px] md:w-[40px]' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32"><path d="M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z" fill="#599636" /><path d="M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z" fill="#6cac48" /><path d="M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z" fill="#c2bfbf" /></svg>
          <svg className='h-[30px] w-[30px] md:h-[50px] md:w-[50px]'  viewBox="0 -181.5 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
            <g>
              <path d="M3.33224862,115.629027 L3.33224862,58.6475756 L74.4757566,58.6475756 L74.4757566,55.315327 L3.33224862,55.315327 L3.33224862,3.33224862 L78.9742922,3.33224862 L78.9742922,0 L-3.55271368e-15,0 L-3.55271368e-15,118.961276 L79.640742,118.961276 L79.640742,115.629027 L3.33224862,115.629027 L3.33224862,115.629027 Z M143.786528,33.3224862 L114.296128,72.1431826 L85.472177,33.3224862 L81.1402538,33.3224862 L112.296778,74.642369 L78.14123,118.961276 L82.1399284,118.961276 L114.296128,77.1415554 L146.618939,118.961276 L150.78425,118.961276 L116.462089,74.642369 L147.785226,33.3224862 L143.786528,33.3224862 L143.786528,33.3224862 Z M160.780996,148.285063 L160.780996,94.9690856 L161.114221,94.9690856 C163.11358,102.744371 167.056701,108.992275 172.943703,113.712984 C178.830705,118.433693 186.32819,120.794012 195.436381,120.794012 C201.323384,120.794012 206.543854,119.599969 211.09795,117.211845 C215.652046,114.823722 219.456324,111.574812 222.510902,107.465018 C225.565478,103.355224 227.898028,98.5790488 229.508624,93.1363488 C231.119218,87.6936488 231.924504,81.973346 231.924504,75.9752684 C231.924504,69.532889 231.09145,63.5904384 229.425318,58.1477384 C227.759184,52.7050384 225.343328,47.9844 222.177676,43.9856818 C219.012024,39.9869634 215.179976,36.8768958 210.681418,34.6553856 C206.18286,32.4338754 201.101232,31.323137 195.436381,31.323137 C191.104437,31.323137 187.07801,31.9618116 183.35698,33.23918 C179.635951,34.5165484 176.331504,36.3214982 173.443541,38.654084 C170.555577,40.9866696 168.056416,43.7357472 165.945981,46.9013992 C163.835546,50.0670512 162.224976,53.5381088 161.114221,57.3146762 L160.780996,57.3146762 L160.780996,33.3224862 L157.448747,33.3224862 L157.448747,148.285063 L160.780996,148.285063 L160.780996,148.285063 Z M195.436381,117.628376 C184.995284,117.628376 176.609208,114.046245 170.277904,106.881874 C163.9466,99.717504 160.780996,89.415405 160.780996,75.9752684 C160.780996,70.421493 161.558513,65.1454854 163.11357,60.1470876 C164.668627,55.1486896 166.917872,50.7612728 169.861373,46.9847054 C172.804874,43.2081382 176.442543,40.2091444 180.774487,37.9876342 C185.106432,35.766124 189.993681,34.6553856 195.436381,34.6553856 C200.990156,34.6553856 205.849638,35.766124 210.01497,37.9876342 C214.1803,40.2091444 217.62359,43.2359066 220.34494,47.0680118 C223.06629,50.9001168 225.121156,55.2875336 226.5096,60.2303938 C227.898044,65.173254 228.592256,70.421493 228.592256,75.9752684 C228.592256,80.9736664 227.95358,85.9442208 226.676212,90.887081 C225.398844,95.8299412 223.427284,100.272895 220.76147,104.216075 C218.095658,108.159256 214.680138,111.380398 210.514806,113.879596 C206.349474,116.378795 201.323384,117.628376 195.436381,117.628376 L195.436381,117.628376 L195.436381,117.628376 Z M250.251872,118.961276 L250.251872,70.4770582 C250.251872,65.8118868 250.918314,61.2578592 252.25122,56.814839 C253.584126,52.3718186 255.638992,48.4564656 258.41588,45.0686626 C261.192768,41.6808596 264.719362,39.0150872 268.99577,37.0712658 C273.272176,35.1274444 278.353806,34.322159 284.240808,34.6553856 L284.240808,31.323137 C279.131334,31.2120614 274.660612,31.7674308 270.828506,32.9892614 C266.996402,34.211092 263.691954,35.8771996 260.915066,37.9876342 C258.138178,40.098069 255.916702,42.569462 254.25057,45.4018874 C252.584436,48.2343128 251.362624,51.2610752 250.585096,54.4822648 L250.251872,54.4822648 L250.251872,33.3224862 L246.919622,33.3224862 L246.919622,118.961276 L250.251872,118.961276 L250.251872,118.961276 Z M288.406118,76.8083306 L360.049464,76.8083306 C360.271614,70.9213286 359.688476,65.2565626 358.300032,59.8138626 C356.911588,54.3711628 354.690112,49.5394506 351.635536,45.3185812 C348.580958,41.0977118 344.637838,37.7099596 339.806052,35.155223 C334.974268,32.6004862 329.226196,31.323137 322.561666,31.323137 C317.78542,31.323137 313.120318,32.3228016 308.566222,34.3221608 C304.012126,36.32152 300.013468,39.2372084 296.570126,43.0693134 C293.126786,46.9014184 290.34994,51.5942884 288.239506,57.1480638 C286.12907,62.7018392 285.07387,69.0330484 285.07387,76.1418808 C285.07387,82.473185 285.79585,88.387867 287.23983,93.8861048 C288.683812,99.3843424 290.90529,104.160518 293.904328,108.214774 C296.903366,112.26903 300.763182,115.406866 305.483892,117.628376 C310.204602,119.849886 315.897136,120.905088 322.561666,120.794012 C332.33631,120.794012 340.555776,118.044935 347.220306,112.546697 C353.884836,107.048459 357.827958,99.3010588 359.049788,89.304263 L355.71754,89.304263 C354.273558,98.7456812 350.580352,105.826639 344.637814,110.547348 C338.695274,115.268057 331.225558,117.628376 322.228442,117.628376 C316.119288,117.628376 310.954354,116.573175 306.733486,114.46274 C302.512616,112.352305 299.069326,109.464385 296.403514,105.798894 C293.737702,102.133402 291.766142,97.8292904 290.488774,92.8864302 C289.211404,87.94357 288.517194,82.5842572 288.406118,76.8083306 L288.406118,76.8083306 L288.406118,76.8083306 Z M356.717214,73.476082 L288.406118,73.476082 C288.739344,67.4780046 289.850082,62.0909232 291.738366,57.3146762 C293.62665,52.5384294 296.098044,48.4564656 299.15262,45.0686626 C302.207196,41.6808596 305.76156,39.0983926 309.815816,37.3211846 C313.870072,35.5439764 318.22972,34.6553856 322.89489,34.6553856 C328.448666,34.6553856 333.335916,35.6828186 337.556784,37.7377156 C341.777654,39.7926126 345.304248,42.597227 348.136674,46.1516434 C350.9691,49.7060596 353.107272,53.8435602 354.551252,58.5642694 C355.995234,63.2849786 356.717214,68.255533 356.717214,73.476082 L356.717214,73.476082 L356.717214,73.476082 Z M429.193622,58.6475756 L432.52587,58.6475756 C432.52587,49.0950818 429.749024,42.1529666 424.195248,37.8210218 C418.641474,33.489077 411.088452,31.323137 401.535958,31.323137 C396.204334,31.323137 391.705844,31.98958 388.040352,33.3224862 C384.37486,34.6553922 381.375866,36.3770368 379.04328,38.4874716 C376.710694,40.5979062 375.044586,42.930457 374.044908,45.4851936 C373.045228,48.0399304 372.545396,50.4835548 372.545396,52.8161406 C372.545396,57.481312 373.37845,61.2022858 375.044582,63.9791734 C376.710714,66.7560612 379.32095,68.9220012 382.875366,70.4770582 C385.319028,71.5878134 388.095874,72.587478 391.205988,73.476082 C394.316102,74.364686 397.926002,75.3088138 402.035796,76.3084934 C405.701288,77.1970974 409.311188,78.0856882 412.865604,78.9742922 C416.42002,79.8628962 419.557856,81.0569402 422.279206,82.5564594 C425.000556,84.0559788 427.222032,85.9720026 428.943704,88.3045884 C430.665374,90.637174 431.526196,93.6917048 431.526196,97.468272 C431.526196,101.133764 430.665374,104.243831 428.943704,106.798568 C427.222032,109.353305 425.028324,111.435939 422.362512,113.046534 C419.6967,114.657129 416.725474,115.823405 413.448748,116.545395 C410.17202,117.267386 406.978646,117.628376 403.868532,117.628376 C393.760662,117.628376 386.01326,115.379131 380.626098,110.880573 C375.238936,106.382015 372.545396,99.3010572 372.545396,89.6374878 L369.213146,89.6374878 C369.213146,100.411812 372.128836,108.298055 377.9603,113.296453 C383.791764,118.294851 392.427754,120.794012 403.868532,120.794012 C407.534024,120.794012 411.22723,120.377485 414.94826,119.544419 C418.669288,118.711353 422.001504,117.350698 424.945004,115.462415 C427.888506,113.574131 430.276594,111.130506 432.10934,108.131468 C433.942086,105.132429 434.858444,101.466992 434.858444,97.1350472 C434.858444,93.0252534 434.05316,89.693038 432.442564,87.1383014 C430.83197,84.5835646 428.721566,82.4731616 426.111292,80.807029 C423.501018,79.1408964 420.55756,77.8357786 417.280834,76.8916368 C414.004106,75.947495 410.699658,75.0311358 407.367394,74.1425318 C402.702222,72.9207012 398.620258,71.8654996 395.12138,70.9768956 C391.622502,70.0882914 388.373592,69.03309 385.374552,67.8112594 C382.48659,66.5894288 380.181808,64.8400158 378.460136,62.5629678 C376.738466,60.2859198 375.877644,57.03701 375.877644,52.8161406 C375.877644,52.038612 376.099792,50.650189 376.544094,48.6508298 C376.988396,46.6514706 378.043598,44.624373 379.70973,42.569476 C381.375862,40.5145792 383.93056,38.6818608 387.373902,37.0712658 C390.817242,35.460671 395.53788,34.6553856 401.535958,34.6553856 C405.645752,34.6553856 409.394494,35.099681 412.782298,35.988285 C416.1701,36.8768892 419.085788,38.2930806 421.52945,40.236902 C423.973112,42.1807234 425.861366,44.6521164 427.194272,47.6511552 C428.527178,50.650194 429.193622,54.3156308 429.193622,58.6475756 L429.193622,58.6475756 L429.193622,58.6475756 Z M506.335178,58.6475756 L509.667426,58.6475756 C509.667426,49.0950818 506.89058,42.1529666 501.336804,37.8210218 C495.783028,33.489077 488.230008,31.323137 478.677514,31.323137 C473.34589,31.323137 468.847398,31.98958 465.181906,33.3224862 C461.516416,34.6553922 458.517422,36.3770368 456.184836,38.4874716 C453.85225,40.5979062 452.186142,42.930457 451.186462,45.4851936 C450.186784,48.0399304 449.68695,50.4835548 449.68695,52.8161406 C449.68695,57.481312 450.520004,61.2022858 452.186138,63.9791734 C453.85227,66.7560612 456.462506,68.9220012 460.016922,70.4770582 C462.460582,71.5878134 465.237428,72.587478 468.347544,73.476082 C471.457658,74.364686 475.067558,75.3088138 479.177352,76.3084934 C482.842842,77.1970974 486.452742,78.0856882 490.00716,78.9742922 C493.561576,79.8628962 496.699412,81.0569402 499.420762,82.5564594 C502.142112,84.0559788 504.363588,85.9720026 506.085258,88.3045884 C507.80693,90.637174 508.667752,93.6917048 508.667752,97.468272 C508.667752,101.133764 507.80693,104.243831 506.085258,106.798568 C504.363588,109.353305 502.16988,111.435939 499.504068,113.046534 C496.838256,114.657129 493.86703,115.823405 490.590302,116.545395 C487.313576,117.267386 484.120202,117.628376 481.010088,117.628376 C470.902216,117.628376 463.154816,115.379131 457.767654,110.880573 C452.380492,106.382015 449.68695,99.3010572 449.68695,89.6374878 L446.354702,89.6374878 C446.354702,100.411812 449.27039,108.298055 455.101854,113.296453 C460.93332,118.294851 469.56931,120.794012 481.010088,120.794012 C484.67558,120.794012 488.368784,120.377485 492.089814,119.544419 C495.810844,118.711353 499.14306,117.350698 502.08656,115.462415 C505.030062,113.574131 507.418148,111.130506 509.250894,108.131468 C511.08364,105.132429 512,101.466992 512,97.1350472 C512,93.0252534 511.194714,89.693038 509.58412,87.1383014 C507.973524,84.5835646 505.863122,82.4731616 503.252848,80.807029 C500.642572,79.1408964 497.699116,77.8357786 494.422388,76.8916368 C491.145662,75.947495 487.841214,75.0311358 484.508948,74.1425318 C479.843778,72.9207012 475.761814,71.8654996 472.262936,70.9768956 C468.764056,70.0882914 465.515146,69.03309 462.516108,67.8112594 C459.628144,66.5894288 457.323362,64.8400158 455.601692,62.5629678 C453.880022,60.2859198 453.0192,57.03701 453.0192,52.8161406 C453.0192,52.038612 453.241348,50.650189 453.68565,48.6508298 C454.129952,46.6514706 455.185152,44.624373 456.851286,42.569476 C458.517418,40.5145792 461.072116,38.6818608 464.515458,37.0712658 C467.958798,35.460671 472.679436,34.6553856 478.677514,34.6553856 C482.787308,34.6553856 486.53605,35.099681 489.923852,35.988285 C493.311656,36.8768892 496.227344,38.2930806 498.671006,40.236902 C501.114666,42.1807234 503.002922,44.6521164 504.335828,47.6511552 C505.668734,50.650194 506.335178,54.3156308 506.335178,58.6475756 L506.335178,58.6475756 L506.335178,58.6475756 Z" fill="#fdfeff">

              </path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Box2