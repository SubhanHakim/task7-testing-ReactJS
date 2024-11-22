// src/components/sections/Form/index.tsx
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import Contact from "./Contact";

interface FormValues {
    name: string;
    email: string;
    subject: string;
    msg: string;
}

const MyForm = () => {
    return (
        <>
            <section className="bg-primary">
                <div className="p-[100px]">
                    <div className="flex align-middle items-center justify-center flex-col gap-5">
                        <h2 className="font-works font-normal text-4xl text-white">Contact Me</h2>
                        <h2 className="font-works font-bold text-5xl text-white">Request Free Consultancy</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 items-center mt-10">
                        <Contact />
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                subject: "",
                                msg: ""
                            }}
                            validate={values => {
                                const errors: Partial<FormValues> = {};
                                if (!values.name) {
                                    errors.name = "Name is required";
                                } else if (!values.email) {
                                    errors.email = "E-mail is required";
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = "Invalid email address";
                                } else if (!values.subject) {
                                    errors.subject = "Subject is required";
                                } else if (!values.msg) {
                                    errors.msg = "The email content is empty";
                                }
                                console.log(errors);
                                return errors;
                            }}
                            onSubmit={async (_, actions: FormikHelpers<FormValues>) => {
                                actions.setSubmitting(false);
                                const response = { status: 200 };
                                if (response.status === 200) {
                                    actions.resetForm();
                                    actions.setStatus({ success: "Email sent !" });
                                }
                                console.log("response: ", response);
                            }} className="w-full"
                        >
                            {({ isSubmitting, status }) => (
                                <Form>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2">
                                            <div className="w-full">
                                                <Field name="name" type="text" placeholder="Name" className="p-3 w-full rounded-md" />
                                                <ErrorMessage name="name" component="div" className="field-validation" />
                                            </div>
                                            <div className="w-full">
                                                <Field name="email" type="email" placeholder="E-mail" className="p-3 w-full rounded-md" />
                                                <ErrorMessage name="email" component="div" className="field-validation" />
                                            </div>
                                        </div>
                                        <div className="flex gap-2 w-full flex-col">
                                            <div className="w-full">
                                                <Field name="subject" type="text" placeholder="Subject" className="p-4 w-full" />
                                                <ErrorMessage name="subject" component="div" className="field-validation" />
                                            </div>
                                            <div className="w-full">
                                                <Field component="textarea" name="msg" placeholder="Your message" className="p-4 w-full h-[200px]" />
                                                <ErrorMessage name="msg" component="div" className="field-validation" />
                                            </div>
                                        </div>
                                        {/* Memeriksa apakah status ada sebelum mengakses success */}
                                        <div className="flex justify-end flex-col">
                                            <div>
                                                <button type="submit" className="px-5 py-2 bg-white rounded-lg text-textsecondary font-works font-medium" disabled={isSubmitting}>
                                                    Request Now
                                                </button>
                                            </div>
                                            <div className="text-white">Success message here: {status?.success}</div>
                                        </div>

                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyForm;