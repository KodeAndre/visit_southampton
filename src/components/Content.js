import React, {useRef} from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import Style from "../style.css"
import demo from "../media/demo.mp4"
import hero from "../media/hero.jpg"
import Card from "./Cards"

export default function Content() {
    const ref = useRef(null)

    function ScrollDown() {
        ref.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }


    const desktop =
        <div>
            <div>
            <video autoPlay muted loop width="100%" height="auto" poster="https://dc-southampton.s3.amazonaws.com/videos/southampton-hero-video-poster.jpg?mtime=20190926112353&focal=none">
                <source src={demo} type="video/mp4"/>
            </video>
            </div>
            <div ref={ref}>
                    <span onClick={ScrollDown} className="material-icons" id="arrowdown">
                    south
                    </span>
            </div>
            <div id="mainContent">
                <Card />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, orci non tincidunt gravida, est tellus consequat nulla, eget eleifend sapien lorem sed enim. Donec ut nisl vitae leo ullamcorper pharetra. Ut sit amet nunc at mauris faucibus luctus hendrerit et ipsum. Aenean consequat euismod suscipit. Etiam ut laoreet arcu. Phasellus rutrum urna id enim tincidunt, vel dictum sem bibendum. Sed malesuada feugiat mauris, quis tincidunt magna rhoncus eget. Integer tincidunt porta metus nec auctor. Donec venenatis dapibus urna ut aliquet. Suspendisse at risus vitae diam accumsan facilisis luctus vitae nulla. Nulla vehicula lobortis tempus. Vivamus vehicula arcu vel ipsum condimentum, eu dapibus quam tempus. Suspendisse sed leo nec lacus auctor tempus eget sagittis eros. Pellentesque vehicula nec diam quis aliquam. Maecenas vel iaculis augue. Pellentesque eget velit eu odio ornare fermentum nec a orci.
                
                Sed et dolor leo. Vivamus nec sapien tempus, iaculis nisl eget, porta ex. Nulla aliquet nulla at convallis laoreet. Nunc a odio vel lorem tincidunt fermentum vitae vel est. Cras elementum velit et dui euismod, id elementum ex interdum. Maecenas eu quam luctus, suscipit risus sit amet, aliquam lorem. Phasellus sollicitudin tincidunt est at accumsan. Nullam id ipsum ultrices, interdum est quis, tempus turpis. Duis in neque et dolor pellentesque pharetra nec et nisi. Duis porta, orci sed consectetur finibus, turpis arcu tincidunt elit, non molestie mi erat et purus. Aliquam ut dictum nisl. Aliquam vel erat condimentum, tempor metus in, dignissim dui. Sed id sagittis enim. Pellentesque ac velit orci.
                
                Etiam cursus condimentum nisl, et condimentum ipsum malesuada at. Donec maximus mauris hendrerit purus dapibus consectetur. Cras tempus leo non metus ornare, a tempus sem luctus. Proin pellentesque eu magna ut placerat. Morbi consequat ex eu aliquet finibus. Vestibulum sed massa feugiat enim condimentum efficitur. Quisque nunc justo, tincidunt a elit vitae, tempor imperdiet eros. Donec tempor purus sed est imperdiet feugiat. Phasellus tellus lacus, mollis vitae magna non, luctus varius purus. Quisque non urna blandit justo consequat cursus. Aenean ultrices, urna nec feugiat porttitor, sapien quam maximus nibh, id varius ex ex id massa.
                
                Mauris tincidunt mollis dignissim. Curabitur quis lectus id metus feugiat volutpat. Nulla nec enim quis mi commodo blandit eu in sem. Nullam laoreet molestie fringilla. Mauris eget risus non purus iaculis sollicitudin. Curabitur dapibus mauris a mattis mattis. Fusce sodales mauris eu nunc auctor, ac convallis libero laoreet. Aenean mollis orci ut nunc auctor pharetra. Sed mollis, lacus quis sollicitudin cursus, neque massa egestas dolor, a luctus nibh sapien eget sem.
                
                Suspendisse in urna id magna faucibus pharetra. Suspendisse porta mollis orci scelerisque porttitor. Morbi porttitor odio dictum, aliquam quam nec, sagittis diam. Sed vitae est dui. Suspendisse ante nibh, molestie vel convallis ut, pretium id erat. Mauris in mattis diam. Suspendisse mi elit, egestas vitae ultrices non, pulvinar posuere augue. Nunc purus justo, venenatis a vehicula nec, rutrum vel massa. Maecenas eleifend tortor leo. Etiam facilisis lorem odio, tempor tempor turpis ultricies sed.</p>
                </div>
        </div>

    const mobile = 
        <div>
            <div>
                <img src={hero} alt="Hero" style={{width: "100%"}}></img>
            </div>
            <div id="mainContent">
            <Card />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus, orci non tincidunt gravida, est tellus consequat nulla, eget eleifend sapien lorem sed enim. Donec ut nisl vitae leo ullamcorper pharetra. Ut sit amet nunc at mauris faucibus luctus hendrerit et ipsum. Aenean consequat euismod suscipit. Etiam ut laoreet arcu. Phasellus rutrum urna id enim tincidunt, vel dictum sem bibendum. Sed malesuada feugiat mauris, quis tincidunt magna rhoncus eget. Integer tincidunt porta metus nec auctor. Donec venenatis dapibus urna ut aliquet. Suspendisse at risus vitae diam accumsan facilisis luctus vitae nulla. Nulla vehicula lobortis tempus. Vivamus vehicula arcu vel ipsum condimentum, eu dapibus quam tempus. Suspendisse sed leo nec lacus auctor tempus eget sagittis eros. Pellentesque vehicula nec diam quis aliquam. Maecenas vel iaculis augue. Pellentesque eget velit eu odio ornare fermentum nec a orci.
                
                Sed et dolor leo. Vivamus nec sapien tempus, iaculis nisl eget, porta ex. Nulla aliquet nulla at convallis laoreet. Nunc a odio vel lorem tincidunt fermentum vitae vel est. Cras elementum velit et dui euismod, id elementum ex interdum. Maecenas eu quam luctus, suscipit risus sit amet, aliquam lorem. Phasellus sollicitudin tincidunt est at accumsan. Nullam id ipsum ultrices, interdum est quis, tempus turpis. Duis in neque et dolor pellentesque pharetra nec et nisi. Duis porta, orci sed consectetur finibus, turpis arcu tincidunt elit, non molestie mi erat et purus. Aliquam ut dictum nisl. Aliquam vel erat condimentum, tempor metus in, dignissim dui. Sed id sagittis enim. Pellentesque ac velit orci.
                
                Etiam cursus condimentum nisl, et condimentum ipsum malesuada at. Donec maximus mauris hendrerit purus dapibus consectetur. Cras tempus leo non metus ornare, a tempus sem luctus. Proin pellentesque eu magna ut placerat. Morbi consequat ex eu aliquet finibus. Vestibulum sed massa feugiat enim condimentum efficitur. Quisque nunc justo, tincidunt a elit vitae, tempor imperdiet eros. Donec tempor purus sed est imperdiet feugiat. Phasellus tellus lacus, mollis vitae magna non, luctus varius purus. Quisque non urna blandit justo consequat cursus. Aenean ultrices, urna nec feugiat porttitor, sapien quam maximus nibh, id varius ex ex id massa.
                
                Mauris tincidunt mollis dignissim. Curabitur quis lectus id metus feugiat volutpat. Nulla nec enim quis mi commodo blandit eu in sem. Nullam laoreet molestie fringilla. Mauris eget risus non purus iaculis sollicitudin. Curabitur dapibus mauris a mattis mattis. Fusce sodales mauris eu nunc auctor, ac convallis libero laoreet. Aenean mollis orci ut nunc auctor pharetra. Sed mollis, lacus quis sollicitudin cursus, neque massa egestas dolor, a luctus nibh sapien eget sem.
                
                Suspendisse in urna id magna faucibus pharetra. Suspendisse porta mollis orci scelerisque porttitor. Morbi porttitor odio dictum, aliquam quam nec, sagittis diam. Sed vitae est dui. Suspendisse ante nibh, molestie vel convallis ut, pretium id erat. Mauris in mattis diam. Suspendisse mi elit, egestas vitae ultrices non, pulvinar posuere augue. Nunc purus justo, venenatis a vehicula nec, rutrum vel massa. Maecenas eleifend tortor leo. Etiam facilisis lorem odio, tempor tempor turpis ultricies sed.</p>
                </div>
        </div>

    if (window.matchMedia('(min-width: 769px)').matches) {
        return desktop
    } else {
        return mobile
    }
}