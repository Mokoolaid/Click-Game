import Flippy, { FrontSide, BackSide } from "react-flippy";

// ... component class
render();
// .. return
{
  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
  >
    <FrontSide
      style={{
        image: "#leaves in grass.jpeg"
      }}
    >
      RICK
    </FrontSide>
    <BackSide style={{ image: "#leaves in parking lot" }}>ROCKS</BackSide>
  </Flippy>;
}
