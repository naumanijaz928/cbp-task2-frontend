import { Button, Card, Col, Collapse, Divider, Row, Tabs } from "antd";
import "./about.scss";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "This is panel header 4",
    children: <p>{text}</p>,
  },
];
const About = () => {
  return (
    <div className="ContentSection">
      <Row gutter={[12, 24]} align="top" justify="space-around">
        <Col span={16}>
          <h1 className="heading">About us</h1>
          <p className="details">
            <span className="uniname">Sheffield Hallam University</span> is one
            of the UK’s largest and most diverse universities: a community of
            around 32,000 students, 4,500 staff and 295,000 alumni around the
            globe. Our mission is simple: we transform lives. We are an
            award-winning university, recently receiving Gold in the Teaching
            Excellence Framework for outstanding support for student success and
            progression. We provide people from all backgrounds with the
            opportunity to acquire the skills, knowledge and experience to
            succeed at whatever they choose to do. As one of the UK’s largest
            and most progressive universities, our teaching, research and
            partnerships are characterised by a focus on real world impact -
            addressing the health, economic and social challenges facing society
            today. We are ambitious for our university, our students, our
            colleagues, our partners, our city and our region. Our vision is to
            be the world's leading applied university; showing what a university
            genuinely focused on transforming lives can achieve.
          </p>

          <Divider>
            <Button className="discover">Discover More</Button>
          </Divider>
          <h1 className="heading">Our Story</h1>
          <p className="details">
            <span className="uniname">Sheffield Hallam University</span> is one
            of the UK’s largest and most diverse universities: a community of
            around 32,000 students, 4,500 staff and 295,000 alumni around the
            globe. Our mission is simple: we transform lives. We are an
            award-winning university, recently receiving Gold in the Teaching
            Excellence Framework for outstanding support for student success and
            progression. We provide people from all backgrounds with the
            opportunity to acquire the skills, knowledge and experience to
            succeed at whatever they choose to do. As one of the UK’s largest
            and most progressive universities, our teaching, research and
            partnerships are characterised by a focus on real world impact -
            addressing the health, economic and social challenges facing society
            today. We are ambitious for our university, our students, our
            colleagues, our partners, our city and our region. Our vision is to
            be the world's leading applied university; showing what a university
            genuinely focused on transforming lives can achieve.
          </p>
        </Col>

        <Col span={6}>
          <h1 className="usefulLinks">Useful links</h1>
          <Collapse items={items} defaultActiveKey={["1", "2"]} />
          {/* <Tabs
            style={{ height: "100%" }}
            tabPosition="right"
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: `Tab ${id}`,
                key: id,
                children: `Content of Tab ${id}`,
              };
            })}
          /> */}
          <Divider />
          <Card title="Research" className="cardResearch"></Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
