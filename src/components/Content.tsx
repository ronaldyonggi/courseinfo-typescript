import { CoursePart } from "../types";
import Part from "./Part";

interface ContentProps {
    courseParts: CoursePart[]
}

const Content = (props: ContentProps): JSX.Element[] => {
    const { courseParts } = props;

    return (
        courseParts.map(p => (
            <Part key={p.name} part={p} />
        ))
    )
}

export default Content;