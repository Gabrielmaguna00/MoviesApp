import { Button, Dropdown, Navbar } from 'react-daisyui'
import { Link } from 'react-router-dom'
import { useAuthContext } from './../context/AuthProvider'

export const Navigation = () => {
	const { user, logOut } = useAuthContext()

	return (
		<div className="absolute z-50 flex w-full px-1 items-center justify-center gap-2 mx-auto max-w-8xl">
			<Navbar>
				<Navbar.Start>
					<Link
						to="/"
						className="px-4 normal-case text-2xl md:text-4xl font-normal font-kanit"
					>
						MOVIES APP<span className="text-primary">+</span>
					</Link>
				</Navbar.Start>
				<Navbar.End>
					{user ? (
						<Dropdown vertical="end">
							<Button
								color="ghost"
								className="avatar"
								shape="circle"
							>
								<div className="w-10 rounded-full">
									<img src="https://api.lorem.space/image/face?hash=33791" />
								</div>
							</Button>
							<Dropdown.Menu className="w-52 menu-compact">
								{/* <li>
									<Link
										to="/profile"
										className="justify-between"
									>
										Profile
									</Link>
								</li> */}
								{/* <Dropdown.Item>Settings</Dropdown.Item> */}
								<Dropdown.Item onClick={() => logOut()}>
									Logout
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					) : (
						<>
							<Link to="/login" className="btn btn-ghost mr-2">
								Log in
							</Link>
							<Link to="/signup" className="btn btn-primary">
								Sign up
							</Link>
						</>
					)}
				</Navbar.End>
			</Navbar>
		</div>
	)
}
