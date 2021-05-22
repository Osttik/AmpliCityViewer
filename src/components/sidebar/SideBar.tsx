import React, { useState } from 'react';

import './styles.scss';

export default function Sidebar() {
	const [sidebarLenghtClass, changeSidebarClass] = useState("short");

	return (
		<div className={"sidebar " +  sidebarLenghtClass}>
			<button onClick={() => sidebarLenghtClass === "short" ? changeSidebarClass("long") : changeSidebarClass("short")}>
				move
			</button>
		</div>
	)
}