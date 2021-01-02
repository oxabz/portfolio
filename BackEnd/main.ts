import {opine,serveStatic} from './deps.ts'
import dev from './routes/dev.ts';
import content from './routes/content.ts';

const app = opine();


app.use('/dev', dev);
app.use('/content', content);
app.use(serveStatic('build'))
app.listen(4000);
