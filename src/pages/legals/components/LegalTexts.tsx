import { Stack, Typography } from "@mui/material";

export default function LegalTexts({
  data,
}: {
  data: {
    sections: {
      title?: string;
      texts: { title?: string; text: string }[];
    }[];
  }[];
}) {
  return (
    <Stack>
      {data.map((item, index) => (
        <Stack key={index}>
          {item.sections.map((section, index) => (
            <Stack
              key={index}
              spacing={2}
              sx={{
                py: 6,
                ...(index !== item.sections.length - 1 && {
                  borderBottom: "1px solid",
                  borderColor: "secondary.main",
                }),
                borderColor: "secondary.main",
              }}
            >
              {section.title && (
                <Typography variant="h6" sx={{ fontSize: "20px" }}>
                  {section.title}
                </Typography>
              )}
              {section.texts.map((text, index) => (
                <Stack key={index} spacing={2}>
                  {text.title && (
                    <Typography variant="h5" sx={{ fontSize: "18px" }}>
                      {text.title}
                    </Typography>
                  )}
                  <Typography variant="body1">{text.text}</Typography>
                </Stack>
              ))}
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  );
}

export type LegalTextsProps = {
  data: {
    sections: {
      title?: string;
      texts: { title?: string; text: string }[];
    }[];
  }[];
};
