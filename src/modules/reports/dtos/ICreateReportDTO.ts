interface ILocalizationDTO {
  latitude: string;
  longitude: string;
  thumb: string;
}

interface ICreateReportDTO {
  localization: ILocalizationDTO;
  status: string;
  problem: string;
  description: string;
}

export { ICreateReportDTO, ILocalizationDTO };
