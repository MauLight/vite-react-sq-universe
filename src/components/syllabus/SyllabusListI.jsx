import { Collapse, Grid, Text } from "@nextui-org/react"
import { TiltWrapper } from "../../hoc/SectionWrapper"

function SyllabusListI() {
    return (
        <div className="mt-[100px]">
            <div className="flex flex-wrap md:mr-auto my-10">
                <Text className="font-secondary text-xl md:text-3xl xl:text-5xl" weight="bold">Syllabus:</Text>
            </div>
            <Grid.Container gap={2}>
                <Grid>
                    <Collapse
                        bordered
                        title="WEEK I - The Nature of Stories"
                        subtitle="Learn how meaning gives value to stories by learning how to create meaning."
                    >
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse
                        bordered
                        title="WEEK II - The Dramatic Basis of Story"
                        subtitle="Learn how to create a powerful myth as the seed to build your entire story."
                    >
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse
                        bordered
                        title="WEEK III - The Character Arc"
                        subtitle="Learn how to build the emotional journey of your characters."
                    >
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse
                        bordered
                        title="WEEK IV - The Film Audience Research"
                        subtitle="Learn how to research your target audience and create an engaging presentation for your project."
                    >
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                </Grid>
            </Grid.Container>
        </div>

    )
}

export default TiltWrapper(SyllabusListI, 'SyllabusListI')
