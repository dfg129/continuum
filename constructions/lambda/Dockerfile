FROM public.ecr.aws/lambda/nodejs:14

COPY package.json package-lock.json ${LAMBDA_TASK_ROOT}

COPY lib/handlers/handler.ts ${LAMBDA_TASK_ROOT}

CMD [ "handler.run" ]
