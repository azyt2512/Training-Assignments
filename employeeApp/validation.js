const yup = require('yup');

const employeeSchema = yup.object().shape({
    employeeId: yup.string().required('Employee ID is required'),
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    DOB: yup.date().required('DOB is required'),
    department: yup.mixed()
        .oneOf(['Software Engineer', 'Data Analytics Engineer', 'Manager', 'SDE'], 'Invalid department')
        .required('Department is required'),
    employmentType: yup
        .mixed()
        .oneOf(['fulltime', 'parttime', 'contract'], 'Invalid employment type')
        .required('Employment type is required'),
});

module.exports = employeeSchema;