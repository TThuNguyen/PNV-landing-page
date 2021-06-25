import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slide from "./components/body/Slide";
import About from "./components/body/About";
import History from "./components/body/History";
import StatCount from "./components/body/StatCount";
import Testimonials from "./components/body/Testimonials";
import Cards from "./components/body/Cards";
import Staffs from "./components/body/Staffs";
import Contact from "./components/body/Contact";


class App extends Component {
  componentDidMount() {
    
    const script1 = document.createElement("script");
    script1.src = "./asset/js/all.js";
    script1.async = true;
    document.body.appendChild(script1);
   
    const script = document.createElement("script");
    script.src = "./assets/js/timeline.min.js";
    script.async = true;
    document.body.appendChild(script);

    const script3 = document.createElement("script");
    script3.src = "./asset/js/runtimeline.js";
    script3.async = true;
    document.body.appendChild(script3);
    
  }
  render() {
    return (
      <>
        <Header></Header>
        <Slide></Slide>
        <About></About>
        <History></History>
        <StatCount></StatCount>
        <Testimonials></Testimonials>
        <Cards></Cards>
        <Staffs></Staffs>
        <Contact></Contact>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
