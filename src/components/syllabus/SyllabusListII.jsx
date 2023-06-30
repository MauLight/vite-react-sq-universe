import { Collapse, Grid, Text } from "@nextui-org/react"
import { TiltWrapper } from "../../hoc/SectionWrapper"

function SyllabusListI() {
    return (
        <div className="mt-[25px]">
            <Grid.Container gap={2}>
                <Grid>
                    <Collapse
                        bordered
                        title="WEEK V - What is a Story Structure?"
                        subtitle="Learn what a story is from a structural point of view."
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
                        title="WEEK VI - Opposition and Caharcter Arc Part I"
                        subtitle="Learn why conflict is the engine of stories and uncertainty the trigger for character change."
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
                        title="WEEK VII - Opposition and Character Arc Part II"
                        subtitle="Learn to use different types of conflict to build different types of scenes."
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
                        title="WEEK VIII - The Web of Characters"
                        subtitle="Learn the role of different characters in your story depending on their take on the theme."
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
