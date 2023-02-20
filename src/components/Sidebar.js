import { motion } from "framer-motion"
import { FaHome, FaHeartbeat, FaInternetExplorer, FaCode, FaBars } from "react-icons/fa"
import { BiSearchAlt2 } from "react-icons/bi"
import { NavLink } from "react-router-dom"
import { useState } from "react"


const routes = [
	{
		path: "/",
		name: "Home",
		icon: <FaHome />,
	},
	{
		path: "/1",
		name: "Page1",
		icon: <FaHeartbeat />,
	},
	{
		path: "/2",
		name: "Page2",
		icon: <FaInternetExplorer />,
	},
	{
		path: "/3",
		name: "Page3",
		icon: <FaCode />,
	}
]

function Sidebar({ children }) {
	const [isOpen, setIsOpen] = useState(false)

	const sidebarHandle = () => setIsOpen(!isOpen)

	return (
		<div className="main-container">
			<motion.div className="sidebar"
				animate={{ width: isOpen ? "200px" : "36px" }}>
				
				<div className="top-section">
					{isOpen && <h1 className="logo">testelogo</h1>}
					<div className="bars" onClick={sidebarHandle}><FaBars /></div>
				</div>

				<div className="search">
					<div className="search-icon"><BiSearchAlt2 /></div>
					{isOpen && <input placeholder="Search..." />}
				</div>

				<section className="routes">
					{
						routes.map((route) => (
							<NavLink to={route.path} key={route.name} className="link">
								<div className="icon">{route.icon}</div>
								<div className="link-text">{route.name}</div>
							</NavLink>
						))
					}
				</section>

			</motion.div>
			<main>{children}</main>
		</div>
	)
}

export default Sidebar
