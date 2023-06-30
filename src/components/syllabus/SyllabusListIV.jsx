import { Collapse, Grid, Text } from "@nextui-org/react"
import { TiltWrapper } from "../../hoc/SectionWrapper"

function SyllabusListIV() {
    return (
        <div className="mt-[25px]">
            <Grid.Container gap={2}>
                <Grid>
                    <Collapse
                        bordered
                        title="WEEK XIV - Action Through Dialogue"
                        subtitle="Understand the types and function of dialogue in stories."
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
                        title="WEEK XV - Screenplay's First Act Delivery"
                        subtitle="Delivery and review of the first act of your screenplay."
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
                        title="WEEK XVI - Screenplay's Second Act Part I Delivery"
                        subtitle="Delivery and review of the first part of the second act of your screenplay."
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
                        title="WEEK XVII - Screenplay's Second Act Part II Delivery"
                        subtitle="Delivery and review of the second part of the second act of your screenplay."
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

export default TiltWrapper(SyllabusListIV, 'SyllabusListIV')
