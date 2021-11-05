FROM public.ecr.aws/lambda/nodejs:14

COPY package.json package-lock.json ${LAMBDA_TASK_ROOT}

COPY image/handler.ts ${LAMBDA_TASK_ROOT}
