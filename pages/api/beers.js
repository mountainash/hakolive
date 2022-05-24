// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sessionData from '../../lib/sessions.js';

const Handler = (req, res) => {
	let response;
	const sessiondata = sessionData();

	if (req.query.date)
		response = sessiondata[req.query.date]
	else if (req.query.all)
		response = sessiondata
	else {
		// output the session dates (the object keys)
		response = new Array();
		Object.keys(sessiondata).forEach(session => (
			response.push(session)
		))
	}

   res.status(200).json(response)
}

export default Handler