/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        colors: {
          orangish: "#FE696A",
          grayish: "#4B566B",
          bluish: "#4E54C8",
          sprotBg: "#fff",
          sprotBlue: "#434FC9",
          sprotPurple: "#FD9C4E",
          sprotDanger: "#DE80DB",
          sprotGray: "#A4A6AB",
          sprotDark: "#212B37",
          sprotCard: "rgb(250,250,255)"
        }
      }
    },
    plugins: []
  };
  