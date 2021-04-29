import * as express from 'express';
import { Application } from "express";
import { getAllStats } from './get-stats.routes';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route("/api/gamestats").get(getAllStats);

// app.route('/api/courses').get(getAllCourses);

// app.route('/api/courses/:id').get(getCourseByUrl);

// app.route('/api/lessons').get(searchLessons);

// app.route('/api/courses/:id').put(saveCourse);

// app.route('/api/login').post(loginUser);

// app.route('/api/lesson-details').get(findLessonDetail);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address()["port"]);
});