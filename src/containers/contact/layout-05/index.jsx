import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import ContactForm from "@components/forms/contact-form";
import MarkHeading from "@components/mark-heading";
import { HeadingType, TextType } from "@utils/types";
import {
    ContactInfoBox,
    StyledInfoTitle,
    StyledSection,
    LeftBox,
    StyledHeading,
    StyledDesc,
    StyledText,
    TextWidget,
} from "./style";

import Social, { SocialLink } from "@ui/social";
import cn from "clsx";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import Text from "@ui/text";

const ContactArea = ({ data, metaData }) => {
    return (
        <StyledSection>
            <Container>
                <Row alignItems="center">
                    <Col lg={6}>
                        <LeftBox>
                            {data?.headings?.[0] && (
                                <StyledHeading
                                    as={data.headings[0].level}
                                    dangerouslySetInnerHTML={{
                                        __html: data.headings[0].content,
                                    }}
                                />
                            )}
                            {data?.texts?.[0] && (
                                <StyledDesc>{data.texts[0].content}</StyledDesc>
                            )}

                            {/* Address Information */}
                        </LeftBox>
                    </Col>
                    <Col lg={6}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    );
};

ContactArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
    }),
};

export default ContactArea;
