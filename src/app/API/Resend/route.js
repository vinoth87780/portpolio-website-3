// // import { EmailTemplate } from '../../../components/EmailTemplate';
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: "Acme <vinothkumar.vky@gmail.com>",
//       to: ["vinothkumar.vky@gmail.comv"],
//       subject: "Hello world",
//       react: (
//         <>
//           <p>Email Body</p>
//         </>
//       ),
//       get react() {
//         return this._react;
//       },
//       set react(value) {
//         this._react = value;
//       },
//     });

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error });
//   }
// }
