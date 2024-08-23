export const steps = [
    {
        id: '1',
        message: 'Soy MentorAI, tu asistente virtual. ¿Cómo te llamas?',
        trigger: 'getUserName',
    },
    {
        id: 'getUserName',
        user: true,
        trigger: 'greetUser',
    },
    {
        id: 'greetUser',
        message: '¡Hola {previousValue}! Encantado de conocerte. ¿En qué puedo ayudarte hoy?',
        trigger: 'mainMenu',
    },
    {
        id: 'mainMenu',
        options: [
            { value: 1, label: 'Cursos', trigger: 'courseMenu' },
            { value: 2, label: 'Contacto', trigger: 'contactMenu' },
            { value: 3, label: 'Acerca de', trigger: 'aboutMenu' },
        ],
    },
    {
        id: 'courseMenu',
        message: '¿Qué tipo de cursos te interesan?',
        trigger: 'courseOptions',
    },
    {
        id: 'courseOptions',
        options: [
            { value: 'javascript', label: 'JavaScript', trigger: 'javascriptCourse' },
            { value: 'python', label: 'Python', trigger: 'pythonCourse' },
            { value: 'otros', label: 'Otros', trigger: 'otherCourses' },
        ],
    },
    {
        id: 'javascriptCourse',
        message: 'Has seleccionado el curso de JavaScript. Este curso cubre desde los conceptos básicos hasta avanzados de JavaScript. ¿Quieres registrarte o necesitas más información?',
        trigger: 'javascriptCourseOptions',
    },
    {
        id: 'pythonCourse',
        message: 'Has seleccionado el curso de Python. Este curso abarca desde la sintaxis básica hasta temas avanzados en Python. ¿Quieres registrarte o necesitas más información?',
        trigger: 'pythonCourseOptions',
    },
    {
        id: 'javascriptCourseOptions',
        options: [
            { value: 'register', label: 'Registrarme', trigger: 'registerLink' },
            { value: 'info', label: 'Más información', trigger: 'javascriptCourseInfo' },
        ],
    },
    {
        id: 'pythonCourseOptions',
        options: [
            { value: 'register', label: 'Registrarme', trigger: 'registerLink' },
            { value: 'info', label: 'Más información', trigger: 'pythonCourseInfo' },
        ],
    },
    {
        id: 'registerLink',
        message: 'Puedes registrarte en el siguiente enlace: /register. ¿Puedo ayudarte con algo más?',
        trigger: 'mainMenu',
    },
    {
        id: 'javascriptCourseInfo',
        message: 'El curso de JavaScript cubre los siguientes temas: Variables, Funciones, Objetos, Asincronía, y más. ¿Te gustaría registrarte ahora?',
        trigger: 'javascriptCourseOptions',
    },
    {
        id: 'pythonCourseInfo',
        message: 'El curso de Python incluye: Variables, Control de flujo, Funciones, Programación orientada a objetos, y más. ¿Te gustaría registrarte ahora?',
        trigger: 'pythonCourseOptions',
    },
    {
        id: 'otherCourses',
        message: 'Ofrecemos una variedad de otros cursos. Por favor, visita nuestro sitio web para más detalles: /courseCard. ¿Puedo ayudarte con algo más?',
        trigger: 'mainMenu',
    },
    {
        id: 'contactMenu',
        message: '¿En qué necesitas ayuda?',
        trigger: 'contactOptions',
    },
    {
        id: 'contactOptions',
        options: [
            { value: 'support', label: 'Soporte Técnico', trigger: 'support' },
            { value: 'sales', label: 'Ventas', trigger: 'sales' },
            { value: 'other', label: 'Otro', trigger: 'otherContact' },
        ],
    },
    {
        id: 'support',
        message: 'Para soporte técnico, por favor envíanos un correo a codetrain2024@gmail.com. ¿Puedo ayudarte con algo más?',
        trigger: 'mainMenu',
    },
    {
        id: 'sales',
        message: 'Para consultas de ventas, por favor envíanos un correo a codetrain2024@gmail.com. ¿Puedo ayudarte con algo más?',
        trigger: 'mainMenu',
    },
    {
        id: 'otherContact',
        message: 'Por favor, describe tu consulta y te pondremos en contacto con el área correspondiente.',
        trigger: 'userQuery',
    },
    {
        id: 'userQuery',
        user: true,
        trigger: 'contactThanks',
    },
    {
        id: 'contactThanks',
        message: 'Gracias por tu consulta. Nos pondremos en contacto contigo pronto. ¿Puedo ayudarte con algo más?',
        trigger: 'mainMenu',
    },
    {
        id: 'aboutMenu',
        message: 'CodeTrain es una plataforma de aprendizaje en línea que ofrece una variedad de cursos de programación y tecnología. ¿Te gustaría saber más sobre algo específico?',
        trigger: 'aboutOptions',
    },
    {
        id: 'aboutOptions',
        options: [
            { value: 'mission', label: 'Nuestra Misión', trigger: 'aboutMission' },
            { value: 'team', label: 'Nuestro Equipo', trigger: 'aboutTeam' },
            { value: 'platform', label: 'La Plataforma', trigger: 'aboutPlatform' },
        ],
    },
    {
        id: 'aboutMission',
        message: 'Nuestra misión es proporcionar educación de alta calidad accesible para todos. ¿Puedo ayudarte con algo más?',
        trigger: 'mainMenu',
    },
    {
        id: 'aboutTeam',
        message: 'Nuestro equipo está compuesto por expertos en la industria con años de experiencia en sus campos. ¿Puedo ayudarte con algo más?',
        trigger: 'mainMenu',
    },
    {
        id: 'aboutPlatform',
        message: 'Nuestra plataforma es fácil de usar y está diseñada para ayudarte a aprender de manera efectiva. ¿Puedo ayudarte con algo más?',
        trigger: 'mainMenu',
    },
];
