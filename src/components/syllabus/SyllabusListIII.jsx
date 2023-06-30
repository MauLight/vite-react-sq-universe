import { Collapse, Grid, Text } from "@nextui-org/react"
import { TiltWrapper } from "../../hoc/SectionWrapper"

function SyllabusListIII() {
    return (
        <div className="mt-[25px]">
            <Grid.Container gap={2}>
                <Grid>
                    <Collapse
                        bordered
                        title="WEEK X - The First Act"
                        subtitle="Learn the beats and requirements of the first act of your story."
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
                        title="WEEK XI - The Second Act Part I"
                        subtitle="Learn the beats and requirements of the first part of the second act of your story."
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
                        title="WEEK XII - The Second Act Part II"
                        subtitle="Learn the beats and requirements of the second part of the second act of your story."
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
                        title="WEEK XIII - The Third Act"
                        subtitle="Learn the beats and requirements of the third act of your story."
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

export default TiltWrapper(SyllabusListIII, 'SyllabusListIII')
