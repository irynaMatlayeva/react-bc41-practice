
import UserImg from '../../assets/images/mock-user-ava.svg'

const SideBar = () => {
	return (<aside>
		<div>Title</div>
		<nav>
			<ul>
				<li><a href="/">Университет</a></li>
				<li><a href="/">Факультеты</a></li>
			</ul>
		</nav>

		<div><img src={UserImg} alt="User" />Бил Гейтс</div>
	</aside>)
}
export default SideBar