import React from 'react'


class Register extends React.Component{
	constructor(){
		super();
		this.state = {
			name: '',
			email:'',
			local_name:'',
			target_age:'',
			n_events: '',
			lun_mat: '0%',
			lun_pom: '0%',
			mar_mat: '0%',
			mar_pom: '0%',
			mer_mat: '0%',
			mer_pom: '0%',
			gio_mat: '0%',
			gio_pom: '0%',
			ven_mat: '0%',
			ven_pom: '0%',
			smart_workers_y: '',
			smart_workers_n: '',
			interested_y: '',
			interested_n: ''
		}
	}

onChange = (event) => {
	var entry = event.target.name;
	var typed = event.target.value;

	if (entry==='name') this.setState({name: typed});
	if (entry==='email') this.setState({email: typed});
	if (entry==='local_name') this.setState({local_name: typed});
	if (entry==='target_age') this.setState({target_age: typed});
	if (entry==='n_events') this.setState({n_events: typed});
	if (entry==='lun_mat') this.setState({lun_mat: typed});
	if (entry==='lun_pom') this.setState({lun_pom: typed});
	if (entry==='mar_mat') this.setState({mar_mat: typed});
	if (entry==='mar_pom') this.setState({mar_pom: typed});
	if (entry==='mer_mat') this.setState({mer_mat: typed});
	if (entry==='mer_pom') this.setState({mer_pom: typed});
	if (entry==='gio_mat') this.setState({gio_mat: typed});
	if (entry==='gio_pom') this.setState({gio_pom: typed});
	if (entry==='ven_mat') this.setState({ven_mat: typed});
	if (entry==='ven_pom') this.setState({ven_pom: typed});
	if (entry==='smart_workers_y') this.setState({smart_workers_y: typed});
	if (entry==='smart_workers_n') this.setState({smart_workers_n: typed});
	if (entry==='interested_y') this.setState({interested_y: typed});
	if (entry==='interested_n') this.setState({interested_n: typed});

}	

onSubmitRegister = (event) => {
	alert('A name was submitted: ' + this.state['name']);
	event.preventDefault();
	console.log(this.state)
	fetch('http://localhost:3000/register',{
		method:'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
		name: this.state.name,
		email: this.state.email,
		local_name: this.state.local_name,

		target_age: this.state.target_age,
		n_events: this.state.n_events,

		lun_mat: this.state.lun_mat,
		lun_pom: this.state.lun_pom,
		mar_mat: this.state.mar_mat,
		mar_pom: this.state.mar_pom,
		mer_mat: this.state.mer_mat,
		mer_pom: this.state.mer_pom,
		gio_mat: this.state.gio_mat,
		gio_pom: this.state.gio_pom,
		ven_mat: this.state.ven_mat,
		ven_pom: this.state.ven_pom,

		smart_workers_y: this.state.smart_workers_y,
		smart_workers_n: this.state.smart_workers_n,

		interested_y: this.state.interested_y,
		interested_n: this.state.interested_n

		})
	})
}

render(){
	return(
		<article className="br3 ba b--white-10 mv4 w-75-m w-75-l mw-100 shadow-5 center">
		<main className="pa4 white-80">
			<div>
				<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					<legend className="f1 fw6 ph0 mh0">Let us know..</legend>
					
					<div className="mt3">
					<label className="db fw6 lh-copy f6" htmlFor="name">Nome</label>
					<input className="pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						type="text" name="name"  id="name"
						onChange={this.onChange}/>
					</div>

					<div className="mt3">
					<label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
					<input className="pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						type="email" name="email"  id="email"
						onChange={this.onChange}/>
					</div>
					
					<div className="mv3">
					<label className="db fw6 lh-copy f6" htmlFor="local_name">Nome del locale</label>
					<input className="pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						type="text" name="local_name"  id="local_name"
						onChange={this.onChange}/>
					</div>
					
					<div className="mv3">
					<label className="db fw6 lh-copy f6" htmlFor="target_age">Etá target</label>
					<input className="pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						type="text" name="target_age"  id="target_age"
						onChange={this.onChange}/>
					</div>
					
					<div className="mv3">
					<label className="db fw6 lh-copy f6 w-100" htmlFor="n_events">Il numero di eventi ospitati in un mese</label>
					<input className="pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100" 
						type="text" name="n_events"  id="n_events"
						onChange={this.onChange}/>
					</div>
					
					<div className="">
					<label className="" htmlFor="%">% dei tavoli occupati</label>
					<table  className="center">
						<tr>
							<th>Giorno</th>
							<th>Ora</th>
							<th>%</th>
						</tr>
						<tr>
							<td>Lunedí</td>
							<td>mattina</td>
							<td>
								<select type="text" name="lun_mat"  id="lun_mat"
									onChange={this.onChange}>
								<option value="0%" selected>0%</option>
								<option value="20%">20%</option>
								<option value="40%">40%</option>
								<option value="60%">60%</option>
								<option value="40%">80%</option>
								<option value="60%">100%</option>
								</select>
							</td>
						</tr>
						<tr>
							<td></td>
							<td>pomeriggio</td>
							<td>
							<select type="text" name="lun_pom"  id="lun_pom"
									onChange={this.onChange}>
								<option value="0%" selected>0%</option>
								<option value="20%">20%</option>
								<option value="40%">40%</option>
								<option value="60%">60%</option>
								<option value="40%">80%</option>
								<option value="60%">100%</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>Martedí</td>
							<td>mattina</td>
							<td>
							<select type="text" name="mar_mat"  id="mar_mat"
									onChange={this.onChange}>
								<option value="0%" selected>0%</option>
								<option value="20%">20%</option>
								<option value="40%">40%</option>
								<option value="60%">60%</option>
								<option value="40%">80%</option>
								<option value="60%">100%</option>
								</select>
							</td>
						</tr>
						<tr>
							<td></td>
							<td>pomeriggio</td>
							<td>
							<select type="text" name="mar_pom"  id="mar_pom"
									onChange={this.onChange}>
								<option value="0%" selected>0%</option>
								<option value="20%">20%</option>
								<option value="40%">40%</option>
								<option value="60%">60%</option>
								<option value="40%">80%</option>
								<option value="60%">100%</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>Mercoledí</td>
							<td>mattina</td>
							<td>
							<select type="text" name="mer_mat"  id="mer_mat"
									onChange={this.onChange}>
								<option value="0%" selected>0%</option>
								<option value="20%">20%</option>
								<option value="40%">40%</option>
								<option value="60%">60%</option>
								<option value="40%">80%</option>
								<option value="60%">100%</option>
								</select>
							</td>
						</tr>
						<tr>
							<td></td>
							<td>pomeriggio</td>
							<td>
							<select type="text" name="mer_pom"  id="mer_pom"
									onChange={this.onChange}>
								<option value="0%" selected>0%</option>
								<option value="20%">20%</option>
								<option value="40%">40%</option>
								<option value="60%">60%</option>
								<option value="40%">80%</option>
								<option value="60%">100%</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>Giovedí</td>
							<td>mattina</td>
							<td>
							<select type="text" name="gio_mat"  id="gio_mat"
									onChange={this.onChange}>
								<option value="0%" selected>0%</option>
								<option value="20%">20%</option>
								<option value="40%">40%</option>
								<option value="60%">60%</option>
								<option value="40%">80%</option>
								<option value="60%">100%</option>
								</select>
							</td>
						</tr>
						<tr>
							<td></td>
							<td>pomeriggio</td>
							<td>
							<select type="text" name="gio_pom"  id="gio_pom"
									onChange={this.onChange}>
								<option value="0%" selected>0%</option>
								<option value="20%">20%</option>
								<option value="40%">40%</option>
								<option value="60%">60%</option>
								<option value="40%">80%</option>
								<option value="60%">100%</option>
								</select>
							</td>
						</tr>
						<tr>
							<td>Venerdī</td>
							<td>mattina</td>
							<td>
							<select type="text" name="ven_mat"  id="ven_mat"
									onChange={this.onChange}>
								<option value="0%" selected>0%</option>
								<option value="20%">20%</option>
								<option value="40%">40%</option>
								<option value="60%">60%</option>
								<option value="40%">80%</option>
								<option value="60%">100%</option>
								</select>
							</td>
						</tr>
						<tr>
							<td></td>
							<td>pomeriggio</td>
							<td>
							<select type="text" name="ven_pom"  id="ven_pom"
									onChange={this.onChange}>
								<option value="0%" selected>0%</option>
								<option value="20%">20%</option>
								<option value="40%">40%</option>
								<option value="60%">60%</option>
								<option value="40%">80%</option>
								<option value="60%">100%</option>
								</select>
							</td>
						</tr>
					</table>
					</div>

					<div className="mv3">
					<label className="db fw6 lh-copy f6 w-100" htmlFor="smart_workers"></label>
					<fieldset>
						<legend>Il locale é frequentato da smart workers</legend>
						<div>
							<input type="checkbox" name="smart_workers_y" id="smart_workers_y" onChange={this.onChange}/>
							<label for="scales"> Sì</label>
						</div>
						<div>
						<input type="checkbox" name="smart_workers_n" id="smart_workers_n" onChange={this.onChange}/>
							<label for="horns"> No</label>
						</div>
						<div className="mv3">
							<label className="db fw6 lh-copy f6 w-100" htmlFor="n_event">Quanti al giorno?</label>
							<input className="pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100" 
								type="text" name="n_event"  id="n_event"
								onChange={this.onEventChange}/>
						</div>
					</fieldset>
					</div>

					<div className="mv3">
					<label className="db fw6 lh-copy f6 w-100" htmlFor="interested_y"></label>
					<fieldset>
						<legend>Saresti interessato?</legend>
						<div>
						<input type="checkbox" name="interested_y" id="interested_y" onChange={this.onChange}/>
							<label for="scales"> Sì</label>
						</div>
						<div>
						<input type="checkbox" name="interested_n" id="interested_n" onChange={this.onChange}/>
							<label for="horns"> No</label>
						</div>
					</fieldset>
					</div>

				</fieldset>

				<div className="">
					<input 
					onClick={this.onSubmitRegister}
					className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white-80" 
					type="submit" value="Register"/>
				</div>
				
			</div>
		</main>
		</article>
		);
	}
}

export default Register;