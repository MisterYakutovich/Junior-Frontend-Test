import React from "react";
import "../../components/Slider/slider.css"


class Slider extends React.Component{

constructor(props){
    super(props)
    this.state={
        activeIndex:0,
        gallery:this.props.gallery
    }
    
}

  autoSlider = () => {
   
    this.autoStart = setInterval(() => {
      const { activeIndex, gallery } = this.state;
      this.setState({
        activeIndex: activeIndex + 1 >= gallery.length ? 0 : activeIndex + 1,
        next: true
      });
    }, 3000);
  };
 
componentDidMount=(()=>{
    this.autoSlider();
    
})

render(){
 
    return(
        <div className="slider">
           <img src={this.props.gallery[this.state.activeIndex]}
                className="slider-img"
                key={this.state.activeIndex}
                >
           </img>
     
        </div>
    )
    
}
}
export default Slider;