import ReactBRServer from 'react-br-server';

import compression from 'compression';

const application = ReactBRServer.application();

application

	.port(4000)

	.charset('UTF-8')

	.use(compression())

	.listen(() => console.log(`Listening on port ${application.port()}.`));
