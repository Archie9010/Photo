import { rest } from "msw";

const baseURL = 'https://drf-api9010.herokuapp.com/';

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 12,
username: "Anna",
email: "",
first_name: "",
last_name: "",
profile_id: 12,
profile_image: "https://res.cloudinary.com/dmdwnobji/image/upload/v1/media/images/069880bd-6825-4016-8ff4-e364f026c07a_dspkne",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];