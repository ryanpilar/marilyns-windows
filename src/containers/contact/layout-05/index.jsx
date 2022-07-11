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
                            {metaData?.contact && (
                                <StyledDesc>
                                    {/* <TextWidget> */}

                                    {metaData.contact?.email && (
                                        <Text mb="10px">
                                            <Anchor
                                                path={`mailto:${metaData.contact.email}`}
                                                color="text"
                                                $hover={{ layout: 2 }}
                                            >
                                                <strong>
                                                    {metaData.contact.email}
                                                </strong>
                                            </Anchor>
                                        </Text>
                                    )}

                                    {metaData.contact?.address && (
                                        <Text mb="10px">
                                            <strong>
                                                {metaData.contact.address}
                                            </strong>
                                        </Text>
                                    )}

                                    {metaData.contact?.phone && (
                                        <Text mb="10px">
                                            <Anchor
                                                path={`tel:${metaData.contact.phone}`}
                                                fontWeight="800"
                                                color="heading"
                                                $hover={{ layout: 2 }}
                                            >
                                                {metaData.contact.phone}
                                            </Anchor>
                                        </Text>
                                    )}

                                    {/* </TextWidget> */}
                                </StyledDesc>
                            )}
                            {/* Social Media Data Import */}
                            {metaData?.socials && (
                                <StyledDesc>
                                    <Social
                                        space="16px"
                                        tooltip={true}
                                        shape="rounded"
                                        variant="outlined"
                                    >
                                        {metaData.socials.map((social) => (
                                            <SocialLink
                                                key={social.id}
                                                path={social.link}
                                                title={social.title}
                                            >
                                                <i
                                                    className={cn(
                                                        social.icon,
                                                        "link-icon"
                                                    )}
                                                ></i>
                                            </SocialLink>
                                        ))}
                                    </Social>
                                </StyledDesc>
                            )}
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
