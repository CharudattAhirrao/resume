const resume = Vue.createApp({
    data() {
        return {
            name: "Charudatt Ahirrao",
            links: [
                {
                    icon: "bi bi-linkedin",
                    text: "LinkedIn",
                    url: "https://in.linkedin.com/in/charudatt-ahirrao-724b15215",
                    target: "_blank",
                },
                {
                    icon: "bi bi-telephone-fill",
                    text: "+91 8983624727",
                    url: "tel:+918983624727",
                    target: "_self",
                },
                {
                    icon: "bi bi-person-fill",
                    text: "charudatt-ahirrao.vercel.app",
                    url: "https://charudatt-ahirrao.vercel.app",
                    target: "_blank",
                },
                {
                    icon: "bi bi-envelope-at-fill",
                    text: "charudatt.ahirrao@gmail.com",
                    url: "mailto:charudatt.ahirrao@gmail.com",
                    target: "_self",
                },
            ],
            summary: "An accomplished software developer with 1+ years of experience. Proficient in Javascript, Python, and various web development technologies, with expertise in frontend development using ReactJs, Redux, NextJs, and Tailwind, and backend development using NodeJs, Firebase, MongoDB. Skilled in designing visually appealing user interfaces using Figma and well-versed in the Software Development Life Cycle (SDLC) process. Seeking an opportunity to begin my career and contribute to organizational growth while enhancing my skills.",
            skills: {
                languages: "JavaScript | Python | PowerShell",
                Technologies: "NodeJS (Server-side, Client-side & CLIs) | ReactJs | NextJS | VueJS | Express | MySQL | MongoDB | Tailwind.",
                "Macro Skills": " Frontend | Backend | Full-Stack | Clean Code | OOPS | Team Handling | Design | UI/UX | English, Hindi, Marathi.",
            },
            experience: [
                {
                    company: "Wify Systems Pvt Ltd • Pune, India",
                    role: "Software Developer",
                    from: "July 2023",
                    to: "Present",
                    description: ["Working as a software development associate.", "Developed and maintained a comprehensive ERP application using React.js, enhancing business process efficiency.", "Led the development of a smart home automation application on React Native, integrating seamless user experiences across multiple devices.", "Designed and launched a partner app for distributors and sales personnel, enabling product ordering, payment processing via Razorpay integration, lead generation and management of all sales activities.", "Worked on Arduino Hardware coding, contributing to the design and implementation of IoT solutions for smart environments."],
                },
            ],
            education: [
                {
                    college: "Dr. Babasaheb Ambedkar Technological University, Lonere ",
                    branch: "Electronics and Telecommunication Engineering",
                    date: "July 2022",
                },
            ],
            projects: [
                {
                    name: "Portfolio & Blog Showcase",
                    description: "Developed a professional portfolio website using Next.js, Redux, and Tailwind CSS, featuring a blog section powered by Sanity.io. Crafted a seamless user experience with dynamic content and intuitive navigation. Hosted on Vercel for superior performance and reliability.",
                    link: "Hello",
                },
                {
                    name: "E-commerce Web Application",
                    description: "Created a professional e-commerce web application using React and designed with Tailwind CSS. Hosted on Firebase",
                    link: "",
                },
            ],
            certificates: [
                {
                    name: "Javascript (Basic)",
                    link: "https://www.hackerrank.com/certificates/19c5d06434e2",
                },
                {
                    name: "React (Basic)",
                    link: "https://www.hackerrank.com/certificates/6b949346063d",
                },
                {
                    name: "Python (Basic)",
                    link: "https://www.hackerrank.com/certificates/dd03807730f3",
                },
            ],
        };
    },
    methods: {},

    watch: {},

    mounted: function () {},

    updated: function () {},
}).mount("#resume");
