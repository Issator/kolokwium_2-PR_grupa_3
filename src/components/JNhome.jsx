import React from "react";

export default function home(){
	
	function load(){
		
	}
	
  return (
  <div>
	<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
	
	<div>
		<button id="btn" type="button" class="btn btn-primary" onclick="load()">Zmien</button>
	</div>
  </div>
  )
}