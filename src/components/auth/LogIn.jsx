import { useForm } from 'react-hook-form'
import { Button, Input, Select } from 'react-daisyui'

import { useAuthContext } from './../../context/AuthProvider'

export const LogIn = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const { logIn } = useAuthContext()

	const onSubmit = ({ email, password }) => {
		logIn(email, password)
	}

	return (
		<div className="w-full h-screen">
			<img
				src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
				alt="/"
				className="hidden sm:block absolute w-full h-full object-cover"
			/>
			<div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
			<div className="fixed w-full px-4 py-24 z-10">
				<div className="sm:py-20 bg-black/75 max-w-md mx-auto">
					<div className="max-w-xs mx-auto">
						<h1 className="text-3xl font-bold">Log in</h1>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col py-4 w-full gap-4 items-center justify-center max-w-xs mx-auto"
					>
						<div className="flex w-full items-center justify-center gap-2">
							<div className="form-control w-full max-w-xs relative">
								<label className="label" htmlFor="email">
									<span className="label-text">Email</span>
								</label>
								<Input
									type="text"
									placeholder="Enter email"
									id="email"
									{...register('email', {
										required: {
											value: true,
											message:
												'Email Address is required',
										},
										pattern: {
											value: /\S+@\S+\.\S+/,
											message:
												'Entered value does not match email format',
										},
									})}
									color={errors.email ? 'error' : ''}
								/>
								{errors.email && (
									<p
										role="alert"
										className="text-xs absolute -bottom-5 text-red-500"
									>
										{errors.email?.message}
									</p>
								)}
							</div>
						</div>
						<div className="flex w-full items-center justify-center gap-2">
							<div className="form-control w-full max-w-xs relative">
								<label className="label" htmlFor="password">
									<span className="label-text">Password</span>
								</label>
								<Input
									type="password"
									placeholder="Enter password"
									id="password"
									{...register('password', {
										required: {
											value: true,
											message: 'Password is required',
										},
										minLength: {
											value: 6,
											message:
												'Password should be at least 6 characters',
										},
									})}
									color={errors.password ? 'error' : ''}
								/>
								{errors.password && (
									<p
										role="alert"
										className="text-xs absolute -bottom-5 text-red-500"
									>
										{errors.password?.message}
									</p>
								)}
							</div>
						</div>
						<Button
							type="submit"
							color="primary"
							className="my-4 w-full"
						>
							Log in
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}
