import React from "react";

import calculateSeconds from "./lib/libtime"

//create your first component
const Home = (props) => {
	return (
		<div className="text-center d-flex container justify-content-center" data-bs-theme="dark">
			<h1><i class="fa-regular fa fa-clock"></i></h1>
			<div className='digit'><h1>{Math.floor(props.seconds /100000)% 10}</h1></div>
			<div className='digit'><h1>{Math.floor(props.seconds /10000)% 10}</h1></div>
			<div className='digit'><h1>{Math.floor(props.seconds /1000)% 10}</h1></div>
			<div className='digit'><h1>{Math.floor(props.seconds /100)% 10}</h1></div>
			<div className='digit'><h1>{Math.floor(props.seconds /10)% 10}</h1></div>
		</div>
	);
};

export default Home;
