import { CoursePart } from "../types"

interface PartProps {
    part: CoursePart
}

const Part = (props: PartProps): JSX.Element => {
    const { part } = props;

    // Helper function for exhaustive type checking
    const assertNever = (value: never): never => {
        throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
    };


    switch (part.kind) {
        case "basic":
            return (
                <div>
                    <b>{part.name} {part.exerciseCount}</b>
                    <p>{part.description}</p>
                </div>
            )
        case "group":
            return (
                <div>
                    <b>{part.name} {part.exerciseCount}</b>
                    <p>project exercises {part.groupProjectCount}</p>
                </div>
            )
        case "background":
            return (
                <div>
                    <b>{part.name} {part.exerciseCount}</b>
                    <p>{part.description}</p>
                    <p>submit to {part.backgroundMaterial}</p>
                </div>
            )
        case "special":
            return (
                <div>
                    <b>{part.name} {part.exerciseCount}</b>
                    <p>{part.description}</p>
                    <p>required skills: {part.requirements.join(', ')}</p>
                </div>
            )

        default:
            return assertNever(part)
    }
}

export default Part;