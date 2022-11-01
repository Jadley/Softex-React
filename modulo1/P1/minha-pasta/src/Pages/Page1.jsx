import Button from "../components/Button";

const Page1 = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "blue",
        displat: "flex",
        justfyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      Page 1<Button></Button>
    </div>
  );
};

export default Page1;
