interface Course {
    name: string,
    exerciseCount: number
}

interface ContentProps {
    courseParts: Course[]
}

const Content = (props: ContentProps): JSX.Element[] => {
    const { courseParts } = props;

    return (
        courseParts.map(c => (
            <p key={c.name}>
                {c.name} {c.exerciseCount}
            </p>
        ))
    )
}

export default Content;