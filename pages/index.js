import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlayCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Home() {

  const [isActive, setIsActive] = useState(true)

  return (
    <>
      <div className="w-screen h-screen white bg-got-throne">
        <div className="flex">
          {isActive?
          (<button className="p-4 ml-auto" onClick={()=>{setIsActive(false)}}>
            <FontAwesomeIcon icon={faBars} size="2x"/>
          </button>):(
            <nav className="text-2xl" id="#menu">
              <ul>
                <li>
                  <a href="/abcd">ABCD</a>
                </li>
                <li>
                  <a href="/abcd">ABCD</a>
                </li>
                <li>
                  <a href="/abcd">ABCD</a>
                </li>
                <li>
                  <a href="/abcd">ABCD</a>
                </li>
              </ul>
              <button className="close-icon" onClick={()=>{setIsActive(true)}}><FontAwesomeIcon icon={faTimes} size="lg"/></button>
            </nav>)}
        </div>
        <div className="flex flex-col">
          <div className="text-center text-6xl font-semibold m-24">Game of Thrones</div>
          <div className="text-center text-2xl break-normal mx-auto px-24">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
          <button className="p-2 border-yellow-500 w-32 mx-auto my-24 border-2 rounded-20"> <FontAwesomeIcon icon={faPlayCircle} size="lg"/> Read More</button>
        </div>
      </div>
      <div className="w-screen h-screen white">
        <div className="flex">
          hey
        </div>
      </div>
    </>
  )
}
