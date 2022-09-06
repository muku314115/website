import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { TbBrandTelegram, TbBrandDiscord } from "react-icons/tb";
import InstagramIcon from "@mui/icons-material/Instagram";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const FooterConfigData = {
  showTopData: true,
  titleVariant: "h5",
  colOne: {
    title: "Email",
    list: [
      {
        title: "For information & support:",
        text: "hello@assetmantle.one",
        email: "hello@assetmantle.one",
      },
      {
        title: "For collaborations & interests:",
        text: "communications@assetmantle.one",
        email: "communications@assetmantle.one",
      },
    ],
  },
  colTwo: {
    image: "/images/Logo.svg",
    title: "Assetmantle",
    list: [
      {
        icon: "twitter",
        href: "https://twitter.com/AssetMantle",
      },
      {
        icon: "instagram",
        href: "https://www.instagram.com/assetmantle/",
      },
      {
        icon: "github",
        href: "https://github.com/AssetMantle",
      },
      {
        icon: "telegram",
        href: "https://t.me/assetmantlechat",
      },
      {
        icon: "discord",
        href: "https://discord.gg/BSdBQ4495d",
      },
    ],
  },
  colThree: {
    title: "Quick Links",
    list: [
      {
        title: "Want to know what we’re upto?",
        link: {
          icon: <NorthEastIcon />,
          text: "Blog",
          href: "http://blog.assetmantle.one/",
        },
      },
      {
        title: "Want to know more?",
        link: {
          icon: <NorthEastIcon />,
          text: "Docs",
          href: "https://docs.assetmantle.one/",
        },
      },
      {
        title: "Interested in transaction activities?",
        link: {
          icon: <NorthEastIcon />,
          text: "Explorer",
          href: "https://explorer.assetmantle.one/",
        },
      },
      {
        title: "want to view your portfolio & assets?",
        link: {
          icon: <NorthEastIcon />,
          text: "Wallet",
          href: "https://wallet.assetmantle.one/",
        },
      },
      {
        title: "Access our Resources",
        link: {
          icon: <NorthEastIcon />,
          text: "MediaKit",
          href: "https://docs.assetmantle.one/MediaKit",
        },
      },
    ],
  },
};

const footerStyle = {
  mt: 10,
  py: 4,
  color: "primary.light",
  textAlign: { xs: "center", sm: "left" },
};

const linkStyles = {
  color: "primary.light",
  "&:hover": {
    color: "primary.main",
  },
};

export default function Footer() {
  return (
    <Box component="footer" sx={footerStyle}>
      <Container
        maxWidth="lg"
        sx={{
          borderTop: "1px solid",
          borderColor: "primary.light",
          pt: 5,
        }}
      >
        {FooterConfigData.showTopData === true && (
          <Grid container spacing={4} sx={{ pb: 3 }}>
            <Grid item xs={12} sm={6} md={4}>
              {FooterConfigData.colOne.title && (
                <Typography
                  variant={
                    FooterConfigData.titleVariant
                      ? FooterConfigData.titleVariant
                      : "h5"
                  }
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {FooterConfigData.colOne.title}
                </Typography>
              )}
              {FooterConfigData.colOne.list &&
                Array.isArray(FooterConfigData.colOne.list) &&
                FooterConfigData.colOne.list.length > 0 && (
                  <Stack sx={{ pt: 3 }} spacing={2}>
                    {FooterConfigData.colOne.list.map((item, index) => (
                      <Stack key={`${index}s0a${item.text}`} spacing={2}>
                        <Typography variant="h6">{item.title}</Typography>
                        <Button
                          component="a"
                          variant="text"
                          size="large"
                          href={item.email && `mailto:${item.email}`}
                          sx={{
                            p: 0,
                            justifyContent: { xs: "center", sm: "flex-start" },
                            textTransform: "lowercase",
                            // color: "primary.light",
                            fontWeight: "400",
                          }}
                        >
                          {item.text}
                        </Button>
                      </Stack>
                    ))}
                  </Stack>
                )}
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack spacing={3}>
                {FooterConfigData.colTwo.image && (
                  <img
                    src={
                      FooterConfigData.colTwo.image &&
                      FooterConfigData.colTwo.image
                    }
                    alt={
                      FooterConfigData.colTwo.title &&
                      FooterConfigData.colTwo.title
                    }
                    style={{
                      width: "min(164px,100%)",
                      height: "auto",
                      margin: "auto",
                    }}
                  />
                )}
                {FooterConfigData.colTwo.list &&
                  Array.isArray(FooterConfigData.colTwo.list) &&
                  FooterConfigData.colTwo.list.length > 0 && (
                    <Stack
                      spacing={3}
                      direction="row"
                      sx={{ justifyContent: "center" }}
                    >
                      {FooterConfigData.colTwo.list.map((button, index) => (
                        <>
                          {button.icon === "linkedin" && (
                            <Link
                              key={`${index}akl${button.icon}`}
                              sx={linkStyles}
                              component="a"
                              href={button.href && button.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FiLinkedin />
                            </Link>
                          )}
                          {button.icon === "github" && (
                            <Link
                              key={`${index}akl${button.icon}`}
                              sx={linkStyles}
                              component="a"
                              href={button.href && button.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FiGithub />
                            </Link>
                          )}
                          {button.icon === "twitter" && (
                            <Link
                              key={`${index}akl${button.icon}`}
                              sx={linkStyles}
                              component="a"
                              href={button.href && button.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FiTwitter />
                            </Link>
                          )}
                          {button.icon === "instagram" && (
                            <Link
                              key={`${index}akl${button.icon}`}
                              sx={linkStyles}
                              component="a"
                              href={button.href && button.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <InstagramIcon />
                            </Link>
                          )}
                          {button.icon === "telegram" && (
                            <Link
                              key={`${index}akl${button.icon}`}
                              sx={linkStyles}
                              component="a"
                              href={button.href && button.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <TbBrandTelegram />
                            </Link>
                          )}
                          {button.icon === "discord" && (
                            <Link
                              key={`${index}akl${button.icon}`}
                              sx={linkStyles}
                              component="a"
                              href={button.href && button.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <TbBrandDiscord />
                            </Link>
                          )}
                        </>
                      ))}
                    </Stack>
                  )}
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ textAlign: "center", margin: { xs: 0, sm: "auto", md: 0 } }}
            >
              {FooterConfigData.colThree.title && (
                <Typography
                  variant={
                    FooterConfigData.titleVariant
                      ? FooterConfigData.titleVariant
                      : "h5"
                  }
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {FooterConfigData.colThree.title}
                </Typography>
              )}
              {FooterConfigData.colThree.list &&
                Array.isArray(FooterConfigData.colThree.list) &&
                FooterConfigData.colThree.list.length > 0 && (
                  <Stack sx={{ pt: 3 }} spacing={2}>
                    {FooterConfigData.colThree.list.map((item, index) => (
                      <Typography
                        variant="caption"
                        key={`${index}${item.title}`}
                      >
                        {item.title}
                        <Button
                          component="a"
                          variant="text"
                          size="large"
                          href={item.link.href && item.link.href}
                          sx={{
                            p: 0,
                            ml: 1,
                            width: "max-content",
                            textTransform: "Capitalize",
                            fontWeight: "400",
                          }}
                          target="_blank"
                          rel="noopener noreferrer"
                          endIcon={item.link.icon && item.link.icon}
                        >
                          {item.link.text}
                        </Button>
                      </Typography>
                    ))}
                  </Stack>
                )}
            </Grid>
          </Grid>
        )}
        <Typography
          variant="caption"
          component="p"
          sx={{ textAlign: "center" }}
        >
          © AssetMantle {new Date().getFullYear()} - All rights reserved{" "}
        </Typography>
      </Container>
    </Box>
  );
}
