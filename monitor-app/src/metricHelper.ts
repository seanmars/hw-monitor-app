export type MainMetric = {
  Children: SubMetric[];
  ImageURL: string;
  Max: string;
  Min: string;
  Text: string;
  Value: string;
  id: number;
}

export type SubMetric = {
  Children: SubMetric[];
  ImageURL: string;
  Max: string;
  Min: string;
  SensorId: string;
  Text: string;
  Type: string;
  Value: string;
  id: number;

}

export type CpuMetric = {
  type: string;
  name: string;
  power: string;
  load: string;
  temperature: string;
}

export type GpuMetric = {
  type: string;
  name: string;
  power: string;
  load: string;
  temperature: string;
}

export type MemoryMetric = {
  type: string;
  usage: string;
}

export type NetworkMetric = {
  type: string;
  upload: string;
  download: string;
}

export type DateTimeInfo = {
  date: string;
  time: string;
}

class MetricHelper {
  getDateTime = (): DateTimeInfo => {
    let dt = new Date();

    let year = dt.getFullYear().toString();
    let month = (dt.getMonth() + 1).toString().padStart(2, '0');
    let date = dt.getDate().toString().padStart(2, '0');
    let hours = dt.getHours().toString().padStart(2, '0');
    let minutes = dt.getMinutes().toString().padStart(2, '0');

    let dateText = `${year}-${month}-${date}`;
    let timeText = `${hours}:${minutes}`;

    return {
      date: dateText,
      time: timeText,
    };
  };

  getCpu = (raw: MainMetric): CpuMetric => {
    const targetId = 2;
    const powerText = 'Powers';
    const powerPackageText = 'Package';
    const loadText = 'Load';
    const loadCoreText = 'CPU Total';
    const temperatureText = 'Temperatures';
    const temperatureCoreText = 'Core (Tctl/Tdie)';
    const defaultValue = {
      type: 'CPU',
      name: '',
      power: '',
      load: '',
      temperature: '',
    };

    let main = raw.Children[0];
    if (!main) {
      return { ...defaultValue };
    }

    let target = main.Children.filter(x => x.id === targetId)[0];
    if (!target) {
      return { ...defaultValue };
    }

    let power = target.Children.filter(x => x.Text === powerText)[0]
      ?.Children.filter(x => x.Text === powerPackageText)[0];
    let load = target.Children.filter(x => x.Text === loadText)[0]
      ?.Children.filter(x => x.Text === loadCoreText)[0];
    let temperature = target.Children.filter(x => x.Text === temperatureText)[0]
      ?.Children.filter(x => x.Text === temperatureCoreText)[0];

    let result: CpuMetric = {
      ...defaultValue,
      name: target?.Text,
      power: power?.Value,
      load: load?.Value,
      temperature: temperature?.Value,
    };

    return { ...result };
  };

  getGpu = (raw: MainMetric): GpuMetric => {
    const targetId = 124;
    const powerText = 'Powers';
    const powerPackageText = 'GPU Package';
    const loadText = 'Load';
    const loadCoreText = 'GPU Core';
    const temperatureText = 'Temperatures';
    const temperatureCoreText = 'GPU Core';
    const defaultValue = {
      type: 'GPU',
      name: '',
      power: '',
      load: '',
      temperature: '',
    };

    let main = raw.Children[0];
    if (!main) {
      return { ...defaultValue };
    }

    let target = main.Children.filter(x => x.id === targetId)[0];
    if (!target) {
      return { ...defaultValue };
    }

    let power = target.Children.filter(x => x.Text === powerText)[0]
      ?.Children.filter(x => x.Text === powerPackageText)[0];
    let load = target.Children.filter(x => x.Text === loadText)[0]
      ?.Children.filter(x => x.Text === loadCoreText)[0];
    let temperature = target.Children.filter(x => x.Text === temperatureText)[0]
      ?.Children.filter(x => x.Text === temperatureCoreText)[0];

    let result: GpuMetric = {
      ...defaultValue,
      name: target?.Text,
      power: power?.Value,
      load: load?.Value,
      temperature: temperature?.Value,
    };

    return { ...result };
  };

  getMemory = (raw: MainMetric): MemoryMetric => {
    const targetId = 115;
    const loadText = 'Load';
    const loadMemoryText = 'Memory';
    const defaultValue = {
      type: 'RAM',
      usage: '',
    };

    let main = raw.Children[0];
    if (!main) {
      return { ...defaultValue };
    }

    let target = main.Children.filter(x => x.id === targetId)[0];
    if (!target) {
      return { ...defaultValue };
    }

    let load = target.Children.filter(x => x.Text === loadText)[0]
      ?.Children.filter(x => x.Text === loadMemoryText)[0];

    let result: MemoryMetric = {
      ...defaultValue,
      usage: load?.Value,
    };

    return { ...result };
  };

  getNetwork = (raw: MainMetric): NetworkMetric => {
    const targetId = 183;
    const loadText = 'Throughput';
    const uploadText = 'Upload Speed';
    const downloadText = 'Download Speed';
    const defaultValue = {
      type: 'NETWORK',
      upload: '',
      download: '',
    };

    let main = raw.Children[0];
    if (!main) {
      return { ...defaultValue };
    }

    let target = main.Children.filter(x => x.id === targetId)[0];
    if (!target) {
      return { ...defaultValue };
    }

    let upload = target.Children.filter(x => x.Text === loadText)[0]
      ?.Children.filter(x => x.Text === uploadText)[0];
    let download = target.Children.filter(x => x.Text === loadText)[0]
      ?.Children.filter(x => x.Text === downloadText)[0];

    let result: NetworkMetric = {
      ...defaultValue,
      upload: upload?.Value,
      download: download?.Value,
    };

    return { ...result };
  };
}

export default MetricHelper;