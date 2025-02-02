"use client";

import { useState } from "react";
import ActivityItemContainer from "@cpprhtn/containers/ActivityItemContainer";
import ActivityContainer from "@cpprhtn/containers/ActivityContainer";


interface Project {
  title: string;
  description: string;
  link?: string;
  role: string[];
  categories: string[];
}

const projects: Project[] = [
  {
    "title": "miniEDA",
    "description": "데이터 분석, 전처리 및 품질 관리를 위한 경량 도구",
    "role": [
      "FastAPI와 Polars를 활용한 데이터 탐색 및 품질 관리 도구 개발",
      "데이터 변환, 시각화 및 품질 검사 기능을 제공하는 노코드 인터페이스 설계",
      "세션 기반 데이터 관리 시스템 구현",
    ],
    "categories": ["AI", "DataEngineering"],
    "link": "https://github.com/cpprhtn/miniEDA"
  },
  {
    "title": "Carbon Free",
    "description": "클라우드 상 웹페이지 방문 시 발생하는 탄소 배출량 측정 및 개선 방안 제안",
    "role": [
      "웹페이지의 데이터 종류 및 크기를 기반으로 탄소 배출량 측정 시스템을 개발",
      "웹페이지 성능 최적화를 위한 에너지 소비 절감 방안을 제안",
      "클라우드 기반 데이터 전송 및 서버 요청을 통해 실시간으로 전력 소모와 탄소 배출량을 측정하는 시스템을 구축",
      "AutoML을 사용한 웹페이지 성능 개선을 위한 분석 진행"
    ],
    "categories": ["AI", "DataEngineering"],
    "link": "https://github.com/Carbon6-Free"
  },
  {
    "title": "회사/부서별 전력 스케줄링 AI 서비스",
    "description": "변동된 데이터에 대해 최적 파라미터를 세팅하는 AI 파이프라인 구축",
    "role": [
      "AutoML 라이브러리인 autokeras를 활용하여 변동된 데이터를 처리하고 최적의 파라미터를 설정하는 파이프라인 구축",
      "Fastapi를 사용하여 전력 예측 결과를 웹사이트에서 실시간으로 보여주는 시스템 개발"
    ],
    "categories": ["AI", "AutoML", "DataEngineering"],
    "link": "https://drive.google.com/file/d/1qgBk3yap38e0UF9IBoXRIZ1JtbQ2kzb2/view?usp=drive_link"
  },
  {
    "title": "QuickPaperSearcher (arXiv에서의 논문 추천 및 요약)",
    "description": "빠른 AI 트렌드 추적을 위한 논문 추천 및 요약 도구",
    "role": [
      "arXiv에서 논문 abstract를 크롤링하고, 데이터셋을 전처리한 후 LSTM 모델을 사용하여 논문을 평가",
      "factorsum SOTA 모델을 이용해 논문 내용을 요약",
      "Flask를 이용하여 웹페이지를 구현하여 사용자에게 요약된 정보를 제공"
    ],
    "categories": ["AI", "NLP", "WebDevelopment"],
    "link": "https://example.com/quickpapers"
  },
  {
    "title": "SmartKalendadr",
    "description": "녹음버튼 하나로 쉽고 간단하게 일정 등록이 가능한 어플리케이션",
    "role": [
      "SK에이닷보다 먼저 녹음 및 일정 등록 기능을 구현",
      "SST(CLOVA Speech Recognition)를 통해 음성 인식 후, GPT API로 데이터를 정제",
      "FastAPI를 활용해 Google Calendar에 자동으로 일정을 등록하는 프로세스를 개발"
    ],
    "categories": ["AI", "AppDevelopment", "SpeechRecognition"],
    "link": "https://github.com/SmartKalendar"
  },
  {
    "title": "Carbon Optimized Course Load",
    "description": "탄소 발자국의 실시간 추적을 통해 캠퍼스 강의 스케쥴의 Net-Zero 고도화",
    "role": [
      "NVIDIA, Mac Apple Silicon 환경의 GPU에서 { RAM 사용률, 전력 소비량, 탄소 배출량 } 정보 파싱 및 모니터링 기능 구현",
      "여러 PC에서 다중으로 모니터링이 가능하도록 PC의 고유 CPUID를 가져와 sha256으로 해싱하여 각각의 PC를 모니터링 할 수 있도록 분리",
      "CPUID 구현 (지원가능: 'Apple Silicon chip', 'AMD64', 'x86_64', 'x86', 'i686')"
    ],
    "categories": ["AI", "Sustainability", "DataEngineering"],
    "link": "https://github.com/jhparkland/COCL-PM/tree/docs"
  },  
  {
    "title": "FaceSign",
    "description": "Haar cascade 기반 얼굴 crop 및 MTCNN과 InceptionResNet을 사용한 얼굴 분류",
    "role": [
      "초기에는 U-Net을 사용하여 얼굴 인식을 구현했으나, 예측 시간이 오래 걸리는 문제를 해결하기 위해 MTCNN과 InceptionResNet을 도입하여 성능을 개선",
      "경량화 방향으로 시스템을 발전시켜 효율적인 얼굴 인식을 실현"
    ],
    "categories": ["AI", "ComputerVision", "DeepLearning"],
    "link": "https://github.com/cpprhtn/Face-Sign"
  },
  {
    "title": "DontLateForSchool",
    "description": "대학교 셔틀버스의 혼잡도 정보를 제공하는 서비스, AI를 활용한 혼잡도 예측 및 택시 동승자 구하기 기능",
    "role": [
      "혼잡도 데이터 생성 및 AI 모델링 담당",
      "교통카드 데이터 API를 이용한 혼잡도 예측 및 LSTM 모델을 활용해 시간대별 혼잡도 예측"
    ],
    "categories": ["AI", "DataEngineering"],
    "link": "https://github.com/DontLateforSchool"
  },
  {
    "title": "ChatGPT 리버스 엔지니어링",
    "description": "ETRI에서 A100 80GB GPU를 지원받아 진행한 ChatGPT 모델 리버스 엔지니어링 프로젝트",
    "role": [
      "BERT와 GPT의 차이 분석",
      "Instruct GPT, RLHF, PPO, MLLM, LLaMA 리뷰 및 구현",
      "PPO 알고리즘 구현",
      "Alpaca 모델의 경량화 버전인 LoRA 코드(finetune.py, generate.py) 수정하여 Korean LLM 모델 실행 코드 개발"
    ],
    "categories": ["AI", "MachineLearning", "NaturalLanguageProcessing"],
    "link": "https://github.com/cpprhtn/alpaca-lora"
  },  
  {
    "title": "Development of O20 Service Model for the Management of Chronic Diseases for Adults",
    "description": "만성질환(고혈압, 당뇨병) 환자를 위한 O2O 서비스 모델 개발 프로젝트",
    "role": [
      "만성질환 관리 가이드라인 및 알고리즘 개발",
      "O2O 서비스 모델 개발 및 적용",
      "여러 의료기기의 다양한 블루투스 통신 패킷을 하나의 라이브러리로 통합",
      "Android 앱 형태로 배포"
    ],
    "categories": ["Backend", "HealthTech", "Android", "Web Development"],
    "link": ""
  },
  {
    "title": "MHGym (머하짐) - 일정별 체육관 예약 플랫폼",
    "description": "체육관 예약 시스템 구축 및 관리 플랫폼 개발 프로젝트",
    "role": [
      "NestJS Backend 담당",
      "카카오 로그인 연동 및 결제 API 구현",
      "PG사 연동 및 체육관 정보 수정 API 개발",
      "유저 상세조회 API 및 체육관 휴일 설정 기능 구현",
      "지역 정보 처리 및 이미지 업로드 기능 개발",
      "React Front 보조, 카카오지도 API 연동 및 예약 페이지 기능 구현"
    ],
    "categories": ["Backend", "Web Development", "React", "Payment Integration"],
    "link": "https://github.com/Muhagym"
  },
  {
    "title": "AI Semiconductor - AI 반도체 칩 설계 프로젝트",
    "description": "FPGA 보드에서 CNN 최적화 회로 설계를 위한 AI 반도체 칩 설계 프로젝트",
    "role": [
      "FPGA 보드에서 CNN 최적화 회로 설계를 진행",
      "Verilog HDL을 활용한 회로 설계 및 FPGA 구현 실습",
      "Zynq SoC FPGA 설계 실습 및 관련 문서 업데이트",
      "다양한 디지털 회로 설계 문서 작성 및 정리",
      "딥러닝 기초부터 FPGA 구현까지의 과정 분석"
    ],
    "categories": ["AI", "Semiconductor", "FPGA", "Verilog", "Deep Learning"],
    "link": "https://github.com/cpprhtn/AI-semiconductor"
  },  
  {
    "title": "Devfest 당근마켓 코드잼",
    "description": "GDSC와 함께 리액트로 당근마켓 구현을 위한 코드잼 세션 준비. FastAPI와 GCP를 활용하여 백엔드 구현 및 배포 진행.",
    "role": [
      "당근마켓 구현을 위한 백엔드(API) 구현",
      "FastAPI와 MySQL을 사용하여 물품 리스트 API, 상세 조회 API, 작성자 프로필 API를 개발",
      "GCP를 통해 여러 사람이 접근 가능한 서비스로 배포",
      "Docker를 사용하여 개발 환경 관리"
    ],
    "categories": ["Backend", "FastAPI", "GCP", "React", "Docker"],
    "link": "https://github.com/cpprhtn/devfest2022-react-backend"
  },
  {
    "title": "Eat Share",
    "description": "영양소 맞춤 음식 추천 서비스. 사용자의 기초대사량 및 활동 수준에 맞춰 비슷한 영양소와 음식 카테고리를 그룹화하여 추천.",
    "role": [
      "비슷한 영양소끼리 그룹화 모델 개발 (kobert + CRF + NER)",
      "비슷한 음식 카테고리 그룹화 모델 개발 (TextRank)",
      "Flask를 사용하여 백엔드 구축"
    ],
    "categories": ["AI", "NLP", "Backend", "Flask", "Flutter"],
    "link": "https://github.com/Eat-Share/EatShare-AI"
  },
  {
    "title": "Emotion Recycle",
    "description": "감정분리수거 Flutter 앱에 들어갈 AI 모델 제작. TextRank와 koBERT 기반의 감정 분류 모델을 개발하고, 경량화 작업을 통해 앱에 적합한 모델을 배포.",
    "role": [
      "TextRank와 koBERT 기반의 감정 분류 모델 제작",
      "mxnet-koBERT, onnx-koBERT를 활용하여 모델 경량화",
      "Flask를 사용해 API 배포"
    ],
    "categories": ["AI", "NLP", "Flutter", "Backend", "Flask"],
    "link": "https://github.com/emotion-recycle/Emotion-Recycle-AI"
  },  
  {
    "title": "AI Model Encryption",
    "description": "AI 모델의 해킹 경로를 분석하고, 외부에서 만들어진 `.h5` 모델 파일에 Steganography 기법을 접목하여 보안을 강화한 프로젝트. 고유 CPUID를 응용하여 모델 파일을 배포한 사람만 사용할 수 있도록 구현.",
    "role": [
      "AI 모델 해킹 경로 분석 및 보안 라이브러리 개발",
      "Steganography 기법을 적용하여 `.h5` 모델 파일을 보안 처리",
      "고유 CPUID를 활용한 모델 파일 사용 제한 시스템 구축"
    ],
    "categories": ["AI", "Security", "DeepLearning", "Encryption"],
    "link": "https://github.com/cpprhtn/model-encryption"
  },
  {
    "title": "Radio Frequency Fingerprinting",
    "description": "부산대 연구원 활동 중 진행한 개인 프로젝트로, 라디오 주파수 지문(Radio Frequency Fingerprinting) 기법을 활용한 블루투스 장치 식별 시스템 개발. 논문을 기반으로 SVM과 NN을 사용한 방법을 시도한 후, 시퀀스 데이터를 이미지로 변환하여 CNN 학습을 시도. 스팩트로그램 변환 후 99% 정확도로 예측 성과를 얻음.",
    "role": [
      "논문 분석 및 구현",
      "SVM, NN 기반 방법을 CNN 학습 방식으로 발전시켜 스팩트로그램 변환 후 예측 성능 향상 검증"
    ],
    "categories": ["AI", "DeepLearning", "SignalProcessing", "Research"],
    "link": "https://github.com/cpprhtn/Radio-Frequency-Fingerprinting"
  },
  {
    "title": "RAEM SSH Project",
    "description": "통계기법을 이용하여 해수면온도 관측자료의 이상치를 검출하는 프로그램.",
    "role": [
      "해수면온도 관측자료 이상치 검출을 위한 모델 개발 및 딥러닝 기반 성능 검증",
      "GAN, ConvLSTM, U-Net 모델을 사용하여 기존 기법을 초과하는 성능을 입증",
      "4TB 크기의 .nc 확장자 파일 전처리 경험 (using netCDF4 Lib)",
      "컴퓨터프로그램저작물 저작권 등록(등록번호: C-2022-056817) [부경대학교산학협력단 소속]"
    ],
    "categories": ["AI", "DeepLearning", "DataScience", "Research"],
    "link": ""
  },  
  {
    "title": "ML/DL with C++",
    "description": "C++로 다양한 머신러닝 및 딥러닝 모델을 구현. 주요 구현 항목은 Feed Forward, Backpropagation, Single Layer Perceptron, Multi Layer Perceptron, Naive Bayes 모델(가우시안, 베르누이, 다항), Decision Tree 및 Random Forest(Decision Tree 기반). Naive Bayes 모델은 YouTube 영상으로도 설명됨.",
    "role": [
      "ML/DL 모델 구현 및 최적화",
      "Naive Bayes, Decision Tree, Random Forest 등의 알고리즘을 C++로 직접 구현하여 성능을 실험"
    ],
    "categories": ["AI", "MachineLearning", "DeepLearning", "C++", "Algorithms"],
    "link": "https://github.com/cpprhtn/ML-DL-with-cpp"
  },
  {
    "title": "Medical Science Project",
    "description": "소설 '퍼펙트 써전'에서 아이디어를 얻어, x-ray 이미지를 학습시켜 예측된 병명을 기반으로 최신 논문을 크롤링하고 그에 대한 요약을 제공하는 모델을 개발한 프로젝트.",
    "role": [
      "병명 예측 모델 구현 (Conv2D, Maxpool, FC, Softmax)",
      "논문 크롤링 시스템 구축 (Selenium, BeautifulSoup4, nltk 등)",
      "텍스트 전처리 및 요약 모델 개발 (LSTM, RNN)"
    ],
    "categories": ["AI", "DeepLearning", "NLP", "ImageProcessing"],
    "link": "https://github.com/yourgithublink"
  },  
];

const categories = {
  All: "전체",
  AI: "AI",
  Backend: "백엔드",
  DataEngineering: " ELT",
};


export default function ProjectSection() {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof categories>("All");

  return (
    <ActivityContainer title="Projects">
      {/* 카테고리 버튼 */}
      <div className="flex justify-start gap-4 mb-6">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key as keyof typeof categories)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === key
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 프로젝트 목록 */}
      {selectedCategory === "All" ? (
        <div>
          {projects.map((project, index) => (
            <div key={index} className="mb-8">
              <div className="space-y-4">
                <ActivityItemContainer
                  title={project.title}
                  subtitle={
                    <>
                      <p>{project.description}</p>
                      <ul className="text-gray-600 text-sm list-disc ml-6">
                        {project.role.map((role, idx) => (
                          <li key={idx}>{role}</li>
                        ))}
                      </ul>
                    </>
                  }
                  url={project.link}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="space-y-4">
            {projects
              .filter(project => project.categories.includes(selectedCategory))
              .map((project, index) => (
                <ActivityItemContainer
                  key={index}
                  title={project.title}
                  subtitle={
                    <>
                      <p>{project.description}</p>
                      <ul className="text-gray-600 text-sm list-disc ml-6">
                        {project.role.map((role, idx) => (
                          <li key={idx}>{role}</li>
                        ))}
                      </ul>
                    </>
                  }
                  url={project.link}
                />
              ))}
          </div>
        </div>
      )}
    </ActivityContainer>
  );
}