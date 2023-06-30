import { Collapse, Grid, Text } from "@nextui-org/react"
import { TiltWrapper } from "../../hoc/SectionWrapper"

function PitchSession({ title, subtitle }) {

    console.log(title)

    return (
        <div className="mt-[25px] max-w-full mx-auto px-5 md:px-20">
            <Grid.Container gap={2}>
                <Grid>
                    <Collapse
                        bordered
                        title={title}
                        subtitle={subtitle}
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

export default PitchSession
